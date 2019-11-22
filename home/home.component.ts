import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  constructor(private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    //this.router.navigate([''])
  }

  logout(){    
    this.auth.logOut();
    this.router.navigateByUrl('/signin');
  }

}
