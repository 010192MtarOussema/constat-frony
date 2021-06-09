import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompteService {
    private url='http://localhost:9060/'
   
  constructor(private http: HttpClient) { }

  createCompte(compte: Object): Observable<Object> {
    return this.http.post(this.url+'compte/enregistrer', compte);

  }

  getComptesList() {
    return this.http.get(this.url+'compte/comptes');
  }

  getCompte(id: number): Observable<any> {
    return this.http.get(this.url+'compte/compte/'+id);
  }

  deleteCompte(id: Number): Observable<any> {
    return this.http.delete(this.url+'compte/supprimer/'+ id);
  } 
  updateCompte(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'compte/modifier/'+id ,value);
  }

}
export class Compte {
  constructor(){}
  id : any;
  nomUtilisateur: any;
  dateDeCreation: any;

}