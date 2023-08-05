
import { HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { DatabaceService } from 'src/app/databace.service';

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class EmployeDetailComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','data'];
  dataSource = new MatTableDataSource();

  length:any
  pageSize:any = 20
  pageIndex = 0;
  pageSizeOptions:any[] =[20,40]
  showFirstLastButtons = true;
 
  constructor(private db:DatabaceService,private router:Router){}

  @ViewChild('paginator')paginator!:MatPaginator;

  ngOnInit():void{
    this.getData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getData(){
    this.db.getUsers(this.pageIndex,this.pageSize).subscribe((result:any)=>{
      console.log(result.records,"dd");
      console.log(result.records[0],"members");
      
      
      this.dataSource = result.records
      this.length = result._metaData.total_count
    })
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getData()
  }

  Document(data:any){
    console.log(data,"C address");
    
    this.router.navigate(['dashboard/documents'],{
      queryParams:{id:data},
    });
  }
}
