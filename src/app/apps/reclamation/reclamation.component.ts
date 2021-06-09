import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { DemandeService } from 'src/app/tables/services/demande.service';
import { UtilisateurService } from 'src/app/tables/services/utilisateur.service';


@Component({
    selector: 'app-indemnisation',
    templateUrl: './reclamation.component.html',
    styleUrls: ['./reclamation.component.scss']
})
export class reclamationComponent {

    cols = [{ name: 'NomAssure' }, { name: 'Réclamation' }, { name: 'dateDeCreation' }];
    allcols = [{ name: 'NomAssure' }, { name: 'Réclamation' }, { name: 'dateDeCreation' }];
    data = [];
    filteredData = [];
  
  
    @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
    listDemandes : any ; 
    basicForm: FormGroup;
  
    addRowForm: FormGroup;
    constructor(private dynamicScriptLoader: DynamicScriptLoaderService, private fb: FormBuilder , private utilisateurService :UtilisateurService , private demandeService :DemandeService) {


      this.basicForm = this.fb.group({
        id : new FormControl(),
        dateDeCreation: new FormControl(),
        nomAssure: new FormControl(),
       

      });


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
  
  
  }
  