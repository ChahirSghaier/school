import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Reclamation} from '../Model/Restaurent';
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
public url = environment.url ;

constructor(private http: HttpClient) { }

getAllReclamation(){
  return this.http.get<Reclamation[]>(this.url + 'reclamation/' + 'retrieve-all-recl' );
}

  addReclamationSI(r: Reclamation){
    return this.http.post(this.url + 'reclamation/' + 'addReclamationSI', r);
  }

  public addRec(recData: any , options: any): Observable<any>{
    return this.http.post(this.url + 'reclamation/' + 'createReclamation', recData , options);
  }

  delete(id: number){
    return this.http.delete<any>(this.url + 'reclamation/' + 'deletereclamation/' + id );
  }
}

