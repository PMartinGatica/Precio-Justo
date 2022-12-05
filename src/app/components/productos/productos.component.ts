import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { HttpClient } from '@angular/common/http';

export interface Producto{
  ean:number;
  nombre:number;
  precio:number;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] =[];
  provinciaSlcd:string = '';

  constructor(
    productosSrv : ProductosService,
    actRoute: ActivatedRoute,

    ) {

    const {id} =actRoute.snapshot.params;
    //this.provinciaSlcd = id;

    productosSrv.getProductos(id).subscribe((data:any)=>{
      this.productos = data;
    })
    console.log(this.provinciaSlcd);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
