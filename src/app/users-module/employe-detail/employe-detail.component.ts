
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DatabaceService } from 'src/app/databace.service';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class EmployeDetailComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','data'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 
  constructor(private db:DatabaceService,private http: HttpClient){}
  ngOnInit():void{
   this.Getdata();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  Getdata(){
 const result = this.db.getUsers().subscribe((result:any) => {
  if(result){
console.log(result);
  }
},(result) => {
  console.error('Error fetching employee data:', result);
  });
    // this.http.get<any>('https://hmaapi.kilobytetech.com/users?pageNo=1&size=20').subscribe( 
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  data:any;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',data:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',data:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',data:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',data:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',data:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',data:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',data:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',data:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',data:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',data:''},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',data:''},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',data:''},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',data:''},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',data:''},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P',data:''},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S',data:''},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl',data:''},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar',data:''},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K',data:''},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca',data:''},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',data:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',data:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',data:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',data:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',data:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',data:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',data:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',data:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',data:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',data:''},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',data:''},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',data:''},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',data:''},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',data:''},
];

// interface ApiResponse {
//   data: PeriodicElement[];
// }