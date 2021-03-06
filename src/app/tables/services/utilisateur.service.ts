import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
    private url='http://localhost:9060/' 
    

  constructor(private http: HttpClient) { }

  createUtilisateur(assure: Object): Observable<Object> {
    return this.http.post(this.url+'assure/enregistrer', assure);

  }

  getNombreUtilisateur() {
    return this.http.get(this.url+'utilisateur/assure/totale');
  }

  getUtilisateursList() {
    return this.http.get(this.url+'assure/assures');
  }

  getAssure(id: number): Observable<any> {
    return this.http.get(this.url+'assure/assure/'+id);
  }

  deleteAssure(id: Number): Observable<any> {
    return this.http.delete(this.url+'assure/supprimer/'+ id);
  } 
  updateAssure(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'assure/assure/'+id ,value);
  }


}

export class Utilisateur {
  constructor(){}
 id?: any ;
  motDePasse?:any;
  nomUtilisateur?:any
}