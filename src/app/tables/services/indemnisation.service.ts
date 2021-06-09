import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IndemnisationService {
    private url='http://localhost:9060/'
   
  constructor(private http: HttpClient) { }

  createIndemnisation(indemnisation: Object): Observable<Object> {
    return this.http.post(this.url+'indemnisation/enregistrer', indemnisation);

  }

  getIndemnisationsList() {
    return this.http.get(this.url+'indemnisation/indemnisations');
  }

  getIndemnisation(id: number): Observable<any> {
    return this.http.get(this.url+'indemnisation/indemnisation/'+id);
  }

  deleteIndemnisation(id: Number): Observable<any> {
    return this.http.delete(this.url+'indemnisation/supprimer/'+ id);
  } 
  updateIndemnisation(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'indemnisation/modifier/'+id ,value);
  }

}
export class Indemnisation {
  constructor(){}
  id : any;
 
}