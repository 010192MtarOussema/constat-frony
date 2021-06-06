import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
    private url='http://localhost:9070/'
   
  constructor(private http: HttpClient) { }

  createUtilisateur(assure: Object): Observable<Object> {
    return this.http.post(this.url+'api/assure/register', assure);

  }

  getUtilisateursList() {
    return this.http.get(this.url+'api/assure/assures');
  }

  getAssure(id: number): Observable<any> {
    return this.http.get(this.url+'api/assure/assure'+id);
  }

  deleteAssure(id: Number): Observable<any> {
    return this.http.delete(this.url+'/api/assure/assure'+ id);
  } 
  updateAssure(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+"/api/assure/assure", id);
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
  Profession:any;
  motDePasse:any;
  nomUtilisateur:any
}