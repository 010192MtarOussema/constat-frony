import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChefAssuranceService {
    private url='http://localhost:9070/'
   
  constructor(private http: HttpClient) { }

  createChefAssurance(chefassurance: Object): Observable<Object> {
    return this.http.post(this.url+'chefassurance/enregistrer', chefassurance);

  }

  getChefAssurancesList() {
    return this.http.get(this.url+'chefassurance/chefassurances');
  }

  getChefAssurance(id: number): Observable<any> {
    return this.http.get(this.url+'chefassurance/chefassurance/'+id);
  }

  deleteChefAssurance(id: Number): Observable<any> {
    return this.http.delete(this.url+'chefassurance/supprimer/'+ id);
  } 
  updateChefAssurance(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'chefassurance/modifier/'+id ,value);
  }

}
export class chefassurance {
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