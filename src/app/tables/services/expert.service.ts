import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExpertService {
    private url='http://localhost:9070/'
   
  constructor(private http: HttpClient) { }

  createExpert(expert: Object): Observable<Object> {
    return this.http.post(this.url+'expert/enregistrer', expert);

  }

  getExpertsList() {
    return this.http.get(this.url+'expert/experts');
  }

  getExpert(id: number): Observable<any> {
    return this.http.get(this.url+'expert/expert/'+id);
  }

  deleteExpert(id: Number): Observable<any> {
    return this.http.delete(this.url+'expert/supprimer/'+ id);
  } 
  updateExpert(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'expert/modifier/'+id ,value);
  }

}
export class Expert {
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