import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PrestataireService {
    private url='http://localhost:9070/'
   
  constructor(private http: HttpClient) { }

  createPrestataire(prestataire: Object): Observable<Object> {
    return this.http.post(this.url+'prestataire/enregistrer', prestataire);

  }

  getPrestatairesList() {
    return this.http.get(this.url+'prestataire/prestataires');
  }

  getPrestataire(id: number): Observable<any> {
    return this.http.get(this.url+'prestataire/prestataire/'+id);
  }

  deletePrestataire(id: Number): Observable<any> {
    return this.http.delete(this.url+'prestataire/supprimer/'+ id);
  } 
  updatePrestataire(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'prestataire/modifier/'+id ,value);
  }



}
export class Prestataire {
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
  nomUtilisateur:any
}