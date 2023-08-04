import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaceService } from 'src/app/databace.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
valuetoken:any;
  constructor(private router: Router, private fb: FormBuilder, private db: DatabaceService) { }
  loginform = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInIt(): void { 
    // localStorage.setItem('currenttoken',this.valuetoken)
  }
  ngOnChange(){
    // localStorage.setItem('currenttoken',this.valuetoken)
  }

  Submit(formValue: any) {

    if (this.loginform.valid) {
       this.db.userData(formValue.value.email,formValue.value.password).subscribe((result: any) => {
        if (result.email == formValue.value.email) {
          console.log(result.token,"anyyy");
          this.valuetoken = result.token
          localStorage.setItem('currenttoken',result.token)
          
          alert("Login Successful")
          this.router.navigateByUrl('dashboard')
        }else{
          alert("User Not Exist")
        }
      },(error:any)=>{
        console.log(error);
        alert("User Not Exist")

        
      })
    } else {
      alert("not valid");
    }
  }
}
