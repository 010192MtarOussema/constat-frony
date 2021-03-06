import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
import { Utilisateur, UtilisateurService } from '../services/utilisateur.service';
import { VoitureService } from '../services/voiture.service';
import { AssuranceService } from '../services/assurance.service';
import { Assure, AssureService } from '../services/assure.service';

declare const $: any;
declare const M: any;
declare const swal: any;
interface Profession {
  value: string;
}
@Component({
  selector: 'app-advance-table',
  templateUrl: './advance-table.component.html',
  styleUrls: ['./advance-table.component.sass']
})
export class AdvanceTableComponent implements OnInit {

  @ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  professions: Profession[] = [
    {value: 'EXPERT'},
    {value: 'PRESTATAIRE'},
    {value: 'ASSURE'}
  ];
  rows = [];
  selectedName: string = "";
  formData = [];
  imgPath: string = "";
  selectedRowData: selectRowInterface;
  newUserImg = "assets/images/user/user1.jpg";
   listUstilisateurs : any ; 
   listAssurances : any ;
   listVoitures : any ;
   user   : any ; 


  columns = [
    { name: 'nom' }, { name: 'Prenom' }, { name: 'Date De Naissance' }, { name: 'Adresse' }, { name: 'Télephone' }, { name: 'Numero Cin' }
    , { name: 'profession' } , { name: 'Nom Utilisateur' }  ];

  allColumns = [  { name: 'nom' }, { name: 'Prenom' }, { name: 'Date De Naissance' }, { name: 'Adresse' }, { name: 'Télephone' }, { name: 'Numero Cin' }
  , { name: 'profession' } , { name: 'Nom Utilisateur' } ];


  data = [];
  filteredData = [];
  basicForm: FormGroup;

  addRowForm: FormGroup;
 utilisateur: Utilisateur;
 dataFromLocalStorage : any ; 
 assure: any;
 showInformationAssure : boolean = false; 
 showProfession : boolean = false; 

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService, private fb: FormBuilder , private utilisateurService :UtilisateurService ,private voitureService : VoitureService , private assuranceService :AssuranceService ) {
    
    // get utilisateur connecté
    this.dataFromLocalStorage = JSON.parse(localStorage.getItem('UTILISATEUR'));
    console.log('data from ' , this.dataFromLocalStorage.profession)
   // test boutton ajout
  if(this.dataFromLocalStorage.profession=="ASSURE"){

    this.showProfession = false ;
    console.log('yes',   this.showProfession)
  }else{
    this.showProfession = true ; 
    console.log('no' ,    this.showProfession)
  }
    this.basicForm = this.fb.group({
      id : new FormControl(),
      nom: new FormControl(),
      prenom: new FormControl(),
      dateDeNaissance: new FormControl(),
      telephone: new FormControl(),
      numeroCin: new FormControl(),
      profession: new FormControl(),
      motDePasse: new FormControl() , 
      nomUtilisateur: new FormControl() ,
      adresse : new FormControl(),
      marque:  new FormControl(),
      numeroImmatriculation:  new FormControl(),
      numeroPermis:  new FormControl(),
      nomAssurance:  new FormControl(),
      adresseAssurance:  new FormControl(),
      couleur:  new FormControl(),
      numContratAssurance:  new FormControl()
    });

    this.addRowForm = this.fb.group({
      nom: new FormControl(),
      prenom: new FormControl(),
      dateDeNaissance: new FormControl(),
      telephone: new FormControl(),
      numeroCin: new FormControl(),
      profession: new FormControl(),
      motDePasse: new FormControl(), 
      nomUtilisateur: new FormControl() ,
      adresse : new FormControl() ,
      marque: new FormControl(),
      numeroImmatriculation: new FormControl(),
      numeroPermis: new FormControl(),
      nomAssurance: new FormControl(),
      adresseAssurance: new FormControl(),
      couleur: new FormControl(),
      numContratAssurance: new FormControl()
    });
  }

  ngOnInit() {
    this.getAllAssure() ; 
    this.getAllVoiture() ; 
    this.getAllAssurance() ; 
    // $('select').formSelect();
    // this.fetch((data) => {
    //   this.data = data;
    //   // copy over dataset to empty object
    //   this.filteredData = data;
    // });

    'use strict';
    $(function () {
        $('.js-sweetalert button').on('click', function () {
            var type = $(this).data('type');
            if (type === 'confirm') {
              showConfirmMessage();
          }
        
        }
        );
      }
    );

    
    function showConfirmMessage() {
      swal({
          title: "Êtes-vous sûr?",
          text: "Vous ne pourrez pas récupérer ce fichier imaginaire!",
          type: "alert",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Oui, supprimez-le!",
          closeOnConfirm: false
      }, function () {
          swal(
            "Supprimé !", "Votre fichier imaginaire a été supprimé.", "succès");
      });
  }

  }
  //check Profession 
  checkValue(){
    if(this.addRowForm.value.profession =="ASSURE"){

      this.showInformationAssure = true ;
      console.log('yes',   this.showInformationAssure)
    }else{
      this.showInformationAssure = false ; 
      console.log('no' ,    this.showInformationAssure)
    }
  } 
  detailRow(row){{
    this.basicForm.patchValue({
      id : row.id , 
      nom: row.nom,
      prenom: row.prenom,
      dateDeNaissance: row.dateDeNaissance,
      telephone: row.telephone,
      numeroCin: row.numeroCin,
      profession: row.profession,
      motDePasse: row.motDePasse,
      nomUtilisateur: row.nomUtilisateur,
      adresse: row.adresse,
      marque: row.marque,
      numeroImmatriculation: row.numeroImmatriculation,
      numeroPermis: row. numeroPermis,
      nomAssurance: row. nomAssurance,
      adresseAssurance: row. adresseAssurance,
      couleur: row.couleur ,
      numContratAssurance: row.numContratAssurance



     

    });
    this.selectedRowData = row;

    M.updateTextFields();
  }}
  editRow(row) {
    this.basicForm.patchValue({
      id : row.id , 
      nom: row.nom,
      prenom: row.prenom,
      dateDeNaissance: row.dateDeNaissance,
      telephone: row.telephone,
      numeroCin: row.numeroCin,
      profession: row.profession,
      motDePasse: row.motDePasse,
      nomUtilisateur: row.nomUtilisateur,
      adresse: row.adresse,
      marque: row.marque,
      numeroImmatriculation: row.numeroImmatriculation,
      numeroPermis: row. numeroPermis,
      nomAssurance: row. nomAssurance,
      adresseAssurance: row. adresseAssurance,
      couleur: row.couleur ,
      numContratAssurance: row.numContratAssurance

    });
    this.selectedRowData = row;

    M.updateTextFields();
  }




  



  addRow() {
    this.addRowForm.patchValue({
      id: this.getId(10, 100),
      img: this.newUserImg
    });
    M.updateTextFields();
  }


  deleteRow(row) {
    // console.log(row.id);
    // this.data = this.arrayRemove(this.data, row.id)
    console.log(row.id)
    this.utilisateurService.deleteAssure(row.id).subscribe(data=>{
      this.getAllAssure();
    })
    
    this.showNotification("bg-red", "Utilisateur supprimé avec succés", "top", "center", "animated fadeInCenter", "animated fadeOutCenter")
  }

  arrayRemove(array, id) {
    return array.filter(function (element) {
      return element.id != id;
    });

  }

  onEditSave(form: FormGroup) {
    
    this.listUstilisateurs = this.listUstilisateurs.filter((value, key) => {
      if (value.id == form.value.id) {
        value.motDePasse = form.value.motDePasse;
        value.adresse = form.value.adresse;
        value.telephone = form.value.telephone;

      
      }
      $('#editModal').modal('hide');
      
      console.log("id a modifier" ,form )
      this.utilisateurService.updateAssure(form.value.id , form.value).subscribe(
        data=>{
              this.user = data ; 
          
          console.log("update",this.user) ; 
          this.getAllAssure();
        }
      )
      return true;
    });
    this.showNotification("bg-black", "Modification avec succés", "top", "center", "animated fadeInRight", "animated fadeOutRight")
  }

  onAddRowSave(form: FormGroup) {
    // this.data.push(form.value);
    // this.data = [...this.data];
    console.log(form.value)

    this.utilisateurService.createUtilisateur(form.value).subscribe(
      data =>{
        console.log(data)
        this.assure=data;
        console.log ('utilisateur enregistré' , this.assure.nom)
        $('#addModal').modal('hide');
        this.showNotification("bg-green", "L'utilisateur   "+this.assure.nom+"  ajouté avec succés"
        , "top", "center", "animated fadeInRight", "animated fadeOutRight")
        this.getAllAssure(); 
        this.getAllVoiture();
        this.getAllAssurance();
        
      }
      // console.log("upda
    )
    form.reset();
   
  }


  

  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', 'assets/data/adv-tbl-data.json');

  //   req.onload = () => {
  //     const data = JSON.parse(req.response);
  //     cb(data);
  //   };

  //   req.send();
  // }
//get list assure from back 
  getAllAssure(){
    this.utilisateurService.getUtilisateursList().subscribe(
      data =>{
        this.listUstilisateurs = data; 
        console.log("LIST ASSURES" , data) ; 
      }
    )
  }
  getAllVoiture(){
    this.voitureService.getVoituresList().subscribe(
      data =>{
        this.listVoitures = data; 
        console.log("LIST VOITURES" , data) ; 
      }
    )
  }

  getAllAssurance(){
    this.assuranceService.getAssuranceList().subscribe(
      data =>{
        this.listVoitures = data; 
        console.log("LIST ASSURANCES" , data) ; 
      }
    )
  }

  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.filteredData[0]);
    // assign filtered matches to the active datatable
    this.data = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
          // found match, return true to add to result set
          return true;
        }
      }
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  getId(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
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

export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}