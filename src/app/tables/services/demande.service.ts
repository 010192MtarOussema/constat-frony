import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  getindemnisationsList() {
    throw new Error('Method not implemented.');
  }
    private url='http://localhost:9060/'
    //private url='http://192.168.1.101:9060/'
  constructor(private http: HttpClient) { }

createDemande(demande: Object): Observable<Object> {
    return this.http.post(this.url+'demande/enregistrer', demande);

  }

  getDemandesList() {
    return this.http.get(this.url+'demande/demandes');
  }

  getDemande(id: number): Observable<any> {
    return this.http.get(this.url+'demande/demande/'+id);
  }

  deleteDemande(id: Number): Observable<any> {
    return this.http.delete(this.url+'demande/supprimer/'+ id);
  } 
  updateDemande(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'demande/modifier/'+id ,value);
  }
}

export class Demande {
  constructor(){}
  id : any;
  dateDeCreation:any;
  nomUtilisateur:any
}