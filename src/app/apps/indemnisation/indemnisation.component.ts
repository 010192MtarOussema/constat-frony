import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { DemandeService } from 'src/app/tables/services/demande.service';
import { IndemnisationService } from 'src/app/tables/services/indemnisation.service';
import { RapportService } from 'src/app/tables/services/rapport.service';
import { UtilisateurService } from 'src/app/tables/services/utilisateur.service';

declare const $: any;

@Component({
    selector: 'app-indemnisation',
    templateUrl: './indemnisation.component.html',
    styleUrls: ['./indemnisation.component.scss']
})
export class IndemnisationComponent {

    cols = [{ name: 'nomAssure' }, { name: 'Demande' }, { name: 'Rapport' }];
    allcols = [{ name: 'nomAssure' }, { name: 'Demande' }, { name: 'Rapport' }];
    data = [];
    filteredData = [];
  
  
    @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
    listDemandes : any ;
    listIndemnisations : any ; 
    listRapports : any ;
    basicForm: FormGroup;
  
    addRowForm: FormGroup;
    constructor(private dynamicScriptLoader: DynamicScriptLoaderService, private fb: FormBuilder , private utilisateurService :UtilisateurService , private demandeService :DemandeService, private indemnisationService :IndemnisationService , private rapportService :RapportService) {


      this.basicForm = this.fb.group({
        id : new FormControl(),
        dateDeCreationDeDemande: new FormControl(),
        nomAssure: new FormControl(),
       

      });


     }
  
    ngOnInit() {
  

      this.getDemandesList() ; 
      this.getRapportsList() ; 
      this.getIndemnisationList() ; 


      this.fetch((data) => {
        this.data = data;
        // copy over dataset to empty object
        this.filteredData = data;
      });



     

















      
    }
    detailRow(){}
    getDemandesList(){
      this.demandeService.getDemandesList().subscribe(
        data =>{
          this.listDemandes = data; 
          console.log("LIST DEMANDES" , data) ; 
        }
      )
    }

    getRapportsList(){
      this.rapportService.getRapportsList().subscribe(
        data =>{
          this.listRapports = data; 
          console.log("LIST RapportS" , data) ; 
        }
      )
    }

    getIndemnisationList(){
      this.indemnisationService.getIndemnisationList().subscribe(
        data =>{
          this.listIndemnisations = data; 
          console.log("LIST Indemnisations" , data) ; 
        }
      )
    }
  
    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', 'assets/data/ngx-data.json');
  
      req.onload = () => {
        const data = JSON.parse(req.response);
        cb(data);
      };
  
      req.send();
    }
    accepterIndemnisation(){
      this.showNotification("bg-green", " Indemnisation accepté"
      , "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
    }

    refusIndemnisation(){
      this.showNotification("bg-red", "Indemnisation refusé"
      , "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
    }
  
  
    filterDatatable(event) {
      // get the value of the key pressed and make it lowercase
      let val = event.target.value.toLowerCase();
      // get the amount of columns in the table
      let colsAmt = this.cols.length;
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
  