import { Routes, RouterModule} from "@angular/router";

import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';

export const allAppRoutes: Routes = [
  //{path: '', redirectTo: '/signin', pathMatch: 'full' },
  {path: 'signin', component: SigninComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'home', component: HomeComponent, canActivate:[AuthenticationService]}
];