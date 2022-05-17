import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { ClientesService } from '../../services/clientes.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})

export class ClienteFormComponent implements OnInit {

  cliente: Cliente={
    id:0,
    first_name:'',
    last_name:'',
    email:'',
    gender:'',
    image:'' 
  
  };
  constructor(private clienteService:ClientesService,private router:Router ) { }

  ngOnInit(): void {
  }
  saveNewCliente(){
    delete this.cliente.id;
    this.clienteService.guardarCliente(this.cliente).subscribe(res=>{console.log(res);
      this.router.navigate(['/clientes']);
    },
    err=>console.error(err))

  };
    

}
