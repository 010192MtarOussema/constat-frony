import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RapportService {
    private url='http://localhost:9060/'
   
  constructor(private http: HttpClient) { }

  createRapport(rapport: Object): Observable<Object> {
    return this.http.post(this.url+'rapport/enregistrer', rapport);

  }
  getNombreRapport() {
    return this.http.get(this.url+'rapport/rapport/totale');
  }
  getRapportsList() {
    return this.http.get(this.url+'rapport/rapports');
  }

  getRapport(id: number): Observable<any> {
    return this.http.get(this.url+'rapport/rapport/'+id);
  }

  deleteRapport(id: Number): Observable<any> {
    return this.http.delete(this.url+'rapport/supprimer/'+ id);
  } 
  updateRapport(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'rapport/modifier/'+id ,value);
  }
}