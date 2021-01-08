import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
//import { auth } from 'firebase/app'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string =""
  password: string =""


  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async Verify(){
    const{username, password} = this
    //kind of a hack
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(username + '@excenit.com',password)
    }catch(err){
      console.dir(err)
      if(err.code==="auth/invalid-email"){
        console.log("The email address is badly formatted! ");
        

      }
    }
  }

}
