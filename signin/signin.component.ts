import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup, FormControl, NgForm, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean;
  submitted: boolean;
  error: String;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth:AuthenticationService) {
    this.submitted = false;
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId:['', Validators.required],
      passwd:['', Validators.required]
    });
  }

  onSignIn(form : NgForm){
    this.submitted = true;

    const emailId = form.value.emailId;
    const passwd = form.value.passwd;
    

    if(this.loginForm.invalid){
      return;
    } else {
      this.loading = true;
      this.auth.onSignIn(emailId,passwd).subscribe((data)=>{
        this.router.navigateByUrl('/home');
          console.log(data); 
          //this.router.navigateByUrl("/home")
        },
        (err)=>{
          console.log(err);
          this.error = "login error has occured";
        }); 
        this.router.navigate(["/home"]);
    }
    this.router.navigate(["/home"]);
  }
}
