import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators, NgForm, EmailValidator} from '@angular/forms';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  loading: boolean;
  submitted: boolean;
  error: string;
  value: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private auth:AuthenticationService
  ) { 
    this.loading = false;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      passwd:['', [Validators.required,Validators.minLength(6)]],
      firstName:['', Validators.required],
      lastName:['', Validators.required]
    })
  }
  onSubmit(form : NgForm){
    //alert(form.value.emailId);
    this.submitted = true;
    const emailId = form.value.emailId;
    const passwd = form.value.passwd;
    
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    
    if(this.registerForm.invalid){
      return;
    } else {
      // this.router.navigate(["/home"]);
      this.loading = true;
      //alert(passwd);
      this.auth.onSubmit(emailId,firstName,lastName,passwd).subscribe(
        (data)=>{
          console.log(data); 
          //this.router.navigateByUrl("/home")
        },
        (err)=>{
          console.log(err);
          this.error = "registration error has occured";
        },
        this.router.navigate(["/home"])
      )
    }
  }
  
}
