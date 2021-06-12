import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssureService {
    private url='http://localhost:9070/'
   
  constructor(private http: HttpClient) { }

createAssure(assure: Object): Observable<Object> {
    return this.http.post(this.url+'assure/enregistrer', assure);

  }

  getAssuresList() {
    return this.http.get(this.url+'assure/assures');
  }

  getAssure(id: number): Observable<any> {
    return this.http.get(this.url+'assure/assure/'+id);
  }

  deleteAssure(id: Number): Observable<any> {
    return this.http.delete(this.url+'assure/supprimer/'+ id);
  } 
  updateAssure(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'assure/modifier/'+id ,value);
  }
}

export class Assure {
  constructor(){}
  id : any;
  nom: any;
  prenom: any;
  dateDeNaissance: any;
  adresse: any;
  telephone:any;
  numeroCin:any;
  profession:any;
  motDePasse:any;
  nomUtilisateur:any;
  numContratAssurance:any;
}