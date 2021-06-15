import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
    private url='http://localhost:9076/'
   
  constructor(private http: HttpClient) { }

 

    authentification(utilisateur: Utilisateur): Observable<Object> {
        return this.http.post(this.url+'uti/authentification', utilisateur);

  }
}
  export class Utilisateur {
    constructor(){}
  
    motDePasse:any;
    nomUtilisateur:any
  }