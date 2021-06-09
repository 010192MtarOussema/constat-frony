import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VoitureService {
    private url='http://localhost:9060/'
   
  constructor(private http: HttpClient) { }
createVoiture(voiture: Object): Observable<Object> {
    return this.http.post(this.url+'voiture/enregistrer', voiture);

  }

  getVoituresList() {
    return this.http.get(this.url+'voiture/voitures');
  }

  getVoiture(id: number): Observable<any> {
    return this.http.get(this.url+'voiture/voiture/'+id);
  }

  deleteVoiture(id: Number): Observable<any> {
    return this.http.delete(this.url+'voiture/supprimer/'+ id);
  } 
  updateVoiture(id:number, value: any): Observable<Object> {
    return this.http.put(this.url+'voiture/modifier/'+id ,value);
  }
}