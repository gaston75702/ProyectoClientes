import { Component, HostBinding, OnInit } from '@angular/core';
import {ClientesService} from '../../services/clientes.service';
import { Clientes } from 'src/app/models/Cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  @HostBinding('class') classes='row';
  clientes:any =[];
  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
    
  }
  getClientes(){
    this.clientesService.getClientes().subscribe(
      res =>{this.clientes=res;},
      err =>console.error(err)
    );
  }

  borrarCliente(id:string){

    this.clientesService.deleteCliente(id).subscribe(
      res=>{console.log(res)},
      err =>console.log(err),
    )
  }
  

}
