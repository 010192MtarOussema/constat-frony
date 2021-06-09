import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { ReclamationService } from 'src/app/tables/services/reclamation.service';


@Component({
    selector: 'app-reclamation',
    templateUrl: './reclamation.component.html',
    styleUrls: ['./reclamation.component.scss']
})
export class reclamationComponent {

    cols = [{ name: 'nomAssure' }, { name: 'Objet' }, { name: 'dateDeCreationDeReclamation' }];
    allcols = [{ name: 'nomAssure' }, { name: 'Objet' }, { name: 'Date de creation de reclamation' }];
    data = [];
    filteredData = [];
  
  
    @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

    listReclamations : any ; 
    basicForm: FormGroup;
  
    addRowForm: FormGroup;
  
    constructor(private dynamicScriptLoader: DynamicScriptLoaderService, private fb: FormBuilder ,private reclamationService :ReclamationService) { 

      this.basicForm = this.fb.group({
        id : new FormControl(),
        Objet: new FormControl(),
        nomAssure: new FormControl(),
        dateDeCreationDeReclamation: new FormControl(),
       

      });
    }
  
    ngOnInit() {

      this.getReclamationsList() ; 
  
      this.fetch((data) => {
        this.data = data;
        // copy over dataset to empty object
        this.filteredData = data;
      });
    }
    detailRow(){}
    getReclamationsList(){
      this.reclamationService.getReclamationsList().subscribe(
        data =>{
          this.listReclamations = data; 
          console.log("LIST ReclamationS" , data) ; 
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
  