import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get(`${this.API_URI}`); 
  }
  getCliente(id:string){
    return this.http.get(`${this.API_URI}/cliente/${id}`);
  }
  deleteCliente(id:string){
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  guardarCliente(cliente:Cliente){
    return this.http.post(`${this.API_URI}/cliente/crear`,cliente);

  }


}
