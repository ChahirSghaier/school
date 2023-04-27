import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Reclamation} from '../Model/Restaurent';



@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
public url = environment.url ;

constructor(private http: HttpClient) { }

getAllReclamation(){
  return this.http.get<Reclamation[]>(this.url + 'reclamation/' + 'retrieve-all-recl' );
}

addReclamation(r: Reclamation){
    return this.http.post(this.url + 'reclamation/' + 'addReclamation', r);
  }
}

