import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ClienteDetalleComponent } from '../cliente-detalle/cliente-detalle.component';
import { ClienteService } from '../cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  clientes: Observable<Cliente[]> = new Observable();

  constructor(private clienteService: ClienteService, private modalController: ModalController) { }

  ngOnInit() {
    this.updateClientes();
  }

  private updateClientes() {
    this.clientes = this.clienteService.getClientes();
  }

  async ver(cliente: Cliente) {
    const modal = await this.modalController.create({
      component: ClienteDetalleComponent,
      componentProps: {
        cliente: cliente
      }
    });

    modal.present();
  }

}
