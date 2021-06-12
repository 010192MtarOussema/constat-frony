import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssuranceService {
    private url='http://localhost:9070/'
   
  constructor(private http: HttpClient) { }

  createAssurance(assurance: Object): Observable<Object> {
    return this.http.post(this.url+'assurance/enregistrer',assurance);

  }

  getAssuranceList() {
    return this.http.get(this.url+'assurance/assurances');
  }

  getAssurance(id: number): Observable<any> {
    return this.http.get(this.url+'assurance/assurance/'+id);
  }

  deleteAssurance(id: Number): Observable<any> {
    return this.http.delete(this.url+'assurance/supprimer/'+ id);
  } 
  updateAssurance(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'assurance/modifier/'+id ,value);
  }
}
export class Assurance {
    constructor(){}
    id : any;
    nomAssurance:any;
     adresseAssurance:any;
  }