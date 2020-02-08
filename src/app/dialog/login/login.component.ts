import { UserDataService } from './../../services/user-data.service';
import { Validators, FormControl, MinLengthValidator } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit, Input, Output } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { MatSnackBar } from "@angular/material/snack-bar";
import { auth } from 'firebase';

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    public diaglogRef: MatDialogRef<LoginComponent>,
    public afAuth: AngularFireAuth,
    public SnackBar: MatSnackBar,
    public UserDataService:UserDataService,
  ) {}

  isSignUp = true;
  email = new FormControl("", [Validators.required, Validators.email]);
  
  result=null;

  password = new FormControl("", [
    Validators.required,
    Validators.minLength(8)
  ]);
  retypePassword = new FormControl("", [
    Validators.required,
    Validators.pattern(this.password.value)
  ]);

  ngOnInit() {}

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  changeTab(i) {
    this.isSignUp = i === 0;
  }

  signUp() {
    if (this.password != this.retypePassword) {
      this.SnackBar.open("Password does not match!", "oke", { duration: 2000 });
    }
    this.afAuth.auth
      .createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        this.SnackBar.open("SignUp succesfull", "Ok", { duration: 3000 });
        this.email.reset();
        this.password.reset();
        this.retypePassword.reset();
      })
      .catch(err => {
        this.SnackBar.open(err, "OK", { duration: 2000 });
      });
  }

  getPasswordError(){
    return this.password.hasError('required')?'You must enter password':
      this.password.hasError('minLength')?'Your password must have at least 8 characters':'';
  }
    
  getRetypePasswordError(){
     return this.password.hasError('required')? 'You must enter password':
        this.password.hasError('pattern')?  'You must retype correctly': '';
  }

  getErrorMessage(){
    return this.email.hasError('required')?'You must enter yor email':
      this.email.hasError('email')?'You must enter email correcly':'';
  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email.value,this.password.value).then(()=>{
      this.SnackBar.open('Login Successfull','OK',{duration:2000});
      this.diaglogRef.close();
    }).catch((err)=>{this.SnackBar.open('Login failed','OK',{duration:2000})})
  }

  @Input()
  public data:any;
  
  loginWithGG(){
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((result)=>{
      // console.log(result.user.photoURL);
      this.data=result.user;
      
      this.SnackBar.open('Go yah!','OK',{duration:2000});
      this.diaglogRef.close();
      
    }).catch((err)=>{
      this.SnackBar.open(err,'OK',{duration:2000});
    })
  }


}
