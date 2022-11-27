import { Component } from '@angular/core';
import { ProvinciasService, Provincias } from '../../services/provincias.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent {

  
  provincias : Provincias[] =[
  ];

  provinciaSeleccionada: Provincias = {nombre: '', id: 0, url: ''};

  constructor( private provinciasService : ProvinciasService) { 
    this.provinciasService.getProvincias().subscribe((data: any) => {
      console.log(data);
      this.provincias = data;
    });
  } 
  
  ngOnInit() {
  }

} 
