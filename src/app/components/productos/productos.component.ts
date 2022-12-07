import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface Producto{
  nombre:string;
  ean:number;
  precio:number;
}
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit,AfterViewInit  {
  
  displayedColumns: string[] = ['nombre', 'ean', 'precio'];
  dataSource = new MatTableDataSource<Producto>(); 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
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
      this.dataSource.data = data;
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Productos por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
