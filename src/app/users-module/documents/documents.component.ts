import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatabaceService } from 'src/app/databace.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  displayedColumns: string[] = ['button' ,'position', 'weight', 'symbol', 'df', 'fgase', 'email', 'id' , 'name'];
  dataSource = new MatTableDataSource();
constructor(private router:Router,private db:DatabaceService,private route:ActivatedRoute,public dialog: MatDialog){}

ngOnInit():void{
  this.GetValue();
  
}

openDialog(datas:any) {
  console.log(datas);
  
  const dialogRef = this.dialog.open(DialogComponent, {
    data:datas
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
  GetValue(){
    this.route.queryParams.subscribe((res:Params)=>{
      const id = res['id']
 const result = this.db.Documentdata(id).subscribe((result:any)=>{
  if(result){
    console.log(result);
    this.dataSource = result.records
  }
 },(result)=>{
  // alert("error")
 })
    });
   
  }
}
