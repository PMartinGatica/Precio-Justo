import { Component, OnInit } from '@angular/core';
import { ProvinciasService} from '../../services/provincias.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


export interface Provincias{
  id:number,
  nombre:string,
  url:string,
}
@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  
  provincias : Provincias[] =[
  ];

  provinciaSeleccionada: Provincias = { id: 0,nombre: '', url: ''};

  constructor( 
    private provServ : ProvinciasService,
    private router: Router,
    
    private location : Location) { 
    this.provServ.getProvincias().subscribe((data: any) => {
      this.provincias = data;
    });
  } 

  handleOnClickButton() {
    this.router.navigateByUrl(
      `/provincias/${this.provinciaSeleccionada.nombre
        .toLowerCase()
        .replace(/ /g, '-')}/productos`
    );
  

    // this.router.navigateByUrl(
    //   `/provincias/${this.provinciaSeleccionada.url}/productos`
    // ); 
  }
  
  ngOnInit() {
  }

} 
