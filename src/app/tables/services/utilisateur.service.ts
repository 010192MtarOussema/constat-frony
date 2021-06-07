import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
    private url='http://localhost:9080/'
   
  constructor(private http: HttpClient) { }

  createUtilisateur(assure: Object): Observable<Object> {
    return this.http.post(this.url+'assure/enregistrer', assure);

  }

  getUtilisateursList() {
    return this.http.get(this.url+'assure/assures');
  }

  getAssure(id: number): Observable<any> {
    return this.http.get(this.url+'assure/assure/'+id);
  }

  deleteAssure(id: Number): Observable<any> {
    return this.http.delete(this.url+'assure/assure/'+ id);
  } 
  updateAssure(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'assure/assure/'+id ,value);
  }


}

export class Utilisateur {
  constructor(){}
  id : any;
  nom: any;
  prenom: any;
  dateDeNaissance: any;
  adresse: any;
  telephone:any;
  numeroCin:any;
  selectionProfession:any;
  motDePasse:any;
  nomUtilisateur:any
}