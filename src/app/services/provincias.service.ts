import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  constructor(private http: HttpClient) { }  
  
  getProvincias() {
    return this.http.get('./assets/api/provincias.json').pipe(
      map ((data: any) => {
        let respuesta = data.map ((provincia: any) => {
          return {
            nombre: provincia.nombre, 
            id: provincia.id,               
            url: provincia.api,    
          };
        });
        // console.log(respuesta);        
        return respuesta;
      })
    );
  } 
}



