import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaceService } from 'src/app/databace.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(private router:Router,private db:DatabaceService){}
  textbutton1:boolean=true;
  textbutton2:boolean=false;
  textbutton3:boolean=false;
  textbutton4:boolean=false;
  textbutton5:boolean=false;
  ngOnInit(){
  }
  
  // logout function
  Logout(){
    this.router.navigateByUrl('');
    history.pushState({}, '', location.href);
    window.onpopstate = () => {
      history.go(1);
      // alert("please login");
    }; 
  }
  

}
