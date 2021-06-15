import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/tables/services/authentification.service';
import { Utilisateur } from 'src/app/tables/services/utilisateur.service';

declare const jQuery: any;
declare const $: any;

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    authForm: FormGroup;
    utilisateur: Utilisateur;

    constructor(private router: Router, private r: ActivatedRoute, private fb: FormBuilder
        , private authentification: AuthentificationService) {
        this.authForm = this.fb.group({

            motDePasse: new FormControl(),
            nomUtilisateur: new FormControl(),


        });
    }

    onSubmit(form: FormGroup) {
        // console.log(form.value)
        this.authentification.authentification(form.value).subscribe(
            data => {
                console.log(form.value)
                this.utilisateur = data;
                console.log(this.utilisateur)


                if ((this.utilisateur.motDePasse === form.value.motDePasse) && (this.utilisateur.nomUtilisateur === form.value.nomUtilisateur)) {
                    localStorage.setItem("UTILISATEUR", JSON.stringify(this.utilisateur));
                    this.router.navigate(['/dashboard/main']);
                    console.log("SUCESS")

                }
                else {
                    this.showNotification("bg-red", "Nom utilisateur ou mot de passe sont incorrecte", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")

                    console.log("FAILED");
                }

            }
        );

    }

    ngOnInit() {
        (function ($) {
            "use strict";
            /*==================================================================
            [ Focus input ]*/
            $('.input100').each(function () {
                $(this).on('blur', function () {
                    if ($(this).val().trim() != "") {
                        $(this).addClass('has-val');
                    }
                    else {
                        $(this).removeClass('has-val');
                    }
                })
            })


            /*==================================================================
            [ Validate ]*/
            var input = $('.validate-input .input100');

            $('.validate-form').on('submit', function () {
                var check = true;

                for (var i = 0; i < input.length; i++) {
                    if (validate(input[i]) == false) {
                        showValidate(input[i]);
                        check = false;
                    }
                }

                return check;
            });


            $('.validate-form .input100').each(function () {
                $(this).focus(function () {
                    hideValidate(this);
                });
            });

            function validate(input) {
                if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                    if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                        return false;
                    }
                }
                else {
                    if ($(input).val().trim() == '') {
                        return false;
                    }
                }
            }

            function showValidate(input) {
                var thisAlert = $(input).parent();

                $(thisAlert).addClass('alert-validate');
                $(".erroe_dis").remove();
                $(".alert-validate").append('<i class="material-icons erroe_dis">error</i>');
            }

            function hideValidate(input) {
                var thisAlert = $(input).parent();

                $(thisAlert).removeClass('alert-validate');
                $(".erroe_dis").remove();
            }

            /*==================================================================
            [ Show pass ]*/
            var showPass = 0;
            $('.btn-show-pass').on('click', function () {
                if (showPass == 0) {
                    $(this).next('input').attr('type', 'text');
                    $(this).addClass('active');
                    showPass = 1;
                }
                else {
                    $(this).next('input').attr('type', 'password');
                    $(this).removeClass('active');
                    showPass = 0;
                }

            });


        })(jQuery);
    }
    showNotification(colorName, text, placementFrom, placementAlign, animateEnter, animateExit) {
        if (colorName === null || colorName === '') { colorName = 'bg-black'; }
        if (text === null || text === '') { text = 'Turning standard Bootstrap alerts'; }
        if (animateEnter === null || animateEnter === '') { animateEnter = 'animated fadeInDown'; }
        if (animateExit === null || animateExit === '') { animateExit = 'animated fadeOutUp'; }
        var allowDismiss = true;

        $.notify({
            message: text
        },
            {
                type: colorName,
                allow_dismiss: allowDismiss,
                newest_on_top: true,
                timer: 1000,
                placement: {
                    from: placementFrom,
                    align: placementAlign
                },
                animate: {
                    enter: animateEnter,
                    exit: animateExit
                },
                template: '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' + (allowDismiss ? "p-r-35" : "") + '" role="alert">' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                    '</div>'
            });
    }

}
