import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
    private url='http://localhost:9070/'
   
  constructor(private http: HttpClient) { }
createReclamation(reclamation: Object): Observable<Object> {
    return this.http.post(this.url+'reclamation/enregistrer', reclamation);

  }

  getReclamationsList() {
    return this.http.get(this.url+'reclamation/reclamations');
  }

  getReclamation(id: number): Observable<any> {
    return this.http.get(this.url+'reclamation/reclamation/'+id);
  }

  deleteReclamation(id: Number): Observable<any> {
    return this.http.delete(this.url+'reclamation/supprimer/'+ id);
  } 
  updateReclamation(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'reclamation/modifier/'+id ,value);
  }
}