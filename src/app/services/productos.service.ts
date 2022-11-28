import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getProductos(slug:string){
    return this.http.get('./assets/api/tierra-del-fuego.json')
    .pipe(
      map((data:any)=>{
        data.values.shift()
        data.values.shift()
        return data.values.map((producto:any)=>{
          let precio = producto[2]
          precio = precio.replace ('.','')
          precio = precio.replace (',','.')
          return {
            ean : parseInt (producto[0]),
            nombre: producto[1],
            precio: parseFloat(precio),
          }
        })
      })
    )
  }
}
