import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente'; 
import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute, Router,Route} from '@angular/router';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent implements OnInit {
  
  cliente: Cliente={
    id:0,
    first_name:'',
    last_name:'',
    email:'',
    gender:'',
    image:'' 
  
  };
  
  constructor(private clientesService:ClientesService,private router:Router,private activedRoute:ActivatedRoute){}

  ngOnInit(){
    const params =this.activedRoute.snapshot.params;
    console.log(params)
    if(params['id']){
      this.clientesService.getCliente(params['id']).subscribe(
        res=>{
          console.log(res);
          this.cliente=res;
      },err=>console.error(err))
    }

  }

}
