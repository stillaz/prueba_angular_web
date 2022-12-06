import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './home/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  public getClientes() {
    return this.httpClient.get<Cliente[]>('http://localhost:8080/clientes');
  }

  public getCliente(identificacion: string) {
    return this.httpClient.get<Cliente>(`http://localhost:8080/clientes/${identificacion}`);
  }
}
