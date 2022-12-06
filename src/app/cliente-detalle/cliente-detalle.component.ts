import { Component, OnInit } from '@angular/core';
import { Cliente } from '../home/cliente';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.scss'],
})
export class ClienteDetalleComponent implements OnInit {

  cliente: Cliente = {} as Cliente;

  constructor() { }

  ngOnInit() {}

}
