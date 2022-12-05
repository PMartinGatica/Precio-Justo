import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Location } from '@angular/common';


export interface Producto{
  ean:number;
  nombre:string;
  precio:number;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] =[];
  provinciaSlcd:string = 'jujuy';

  constructor(
    productosSrv : ProductosService,
    actRoute: ActivatedRoute,
    private location : Location,

    ) {

    const {nombreProvincia} =actRoute.snapshot.params;
    this.provinciaSlcd = nombreProvincia;

    productosSrv.getProductos(nombreProvincia).subscribe((data:any)=>{
      this.productos = data;
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
