import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
    private url='http://localhost:9070/'
   
  constructor(private http: HttpClient) { }

 

    authentification(utilisateur: Utilisateur): Observable<Object> {
        return this.http.post(this.url+'utilisateur/authentification', utilisateur);

  }
}
  export class Utilisateur {
    constructor(){}
    id : any;
    motDepaasse:any;
    nomUtilisateur:any
  }