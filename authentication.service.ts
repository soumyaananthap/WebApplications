import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from '../../node_modules/rxjs';


var poolData = { UserPoolId : 'us-east-2_1EnAv5Wu2',
        ClientId : '6n3ct5t2adif3udo6m48nhq7qp'
};

var userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{
cognitoUser: any;


  constructor(private router: Router) { }

  onSubmit(emailId,firstName,lastName,passwd){
    var attributeList = [];
    return Observable.create(observer=>{
      userPool.signUp(emailId,passwd,attributeList,null,(err,result)=>{
        if(err){
          console.log(err);
          return;
        }
        this.cognitoUser = result.user;
        console.log('user name is ' + this.cognitoUser.getUsername());
      });
    });
  }

  onSignIn(emailId,passwd){
    const authenticationData = {
      Username : emailId,
      Password : passwd,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    let userData = {
      Username: emailId,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    return Observable.create(observer => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {   
        observer.next(result);
        observer.complete();
      console.log("loggin successful"+result);
    },
      onFailure: function(err) {
        console.log(err);
      },
      });
    });
  }

  getAuthenticatedUser() {
    return userPool.getCurrentUser();
  }

  logOut() {
    this.getAuthenticatedUser().signOut();
    this.cognitoUser = null;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if (localStorage.getItem('CognitoIdentityServiceProvider.6n3ct5t2adif3udo6m48nhq7qp.LastAuthUser') != null){
        return true;
      } else {
        this.router.navigate(['/signin']);
        return false;
      }
  }

}
