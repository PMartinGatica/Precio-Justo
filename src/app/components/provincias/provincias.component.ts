import { Component } from '@angular/core';
import { ProvinciasService, Provincias } from '../../services/provincias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent {

  
  provincias : Provincias[] =[
  ];

  provinciaSeleccionada: Provincias = {nombre: '', id: 0, url: ''};

  constructor( 
    private provinciasService : ProvinciasService,
    private router: Router) { 
    this.provinciasService.getProvincias().subscribe((data: any) => {
      console.log(data);
      this.provincias = data;
    });
  } 

  handleOnClickButton(){
    this.router.navigateByUrl(`provincias/${this.provinciaSeleccionada.url}/productos`);
    console.log(this.provinciaSeleccionada);
  //   this.router.navigateByUrl(
  //     '/provincias/${this.provinciaSeleccionada.api}/productos'    
  // );
  };
  
  ngOnInit() {
  }

} 
