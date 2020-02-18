import { MatSnackBar } from "@angular/material/snack-bar";
import { AngularFireAuth } from "@angular/fire/auth";
import { Input } from "@angular/core";

import { LoginComponent } from "./../../dialog/login/login.component";
import { Component, OnInit, Inject, Output } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-bav-bar",
  templateUrl: "./bav-bar.component.html",
  styleUrls: ["./bav-bar.component.scss"]
})
export class BavBarComponent implements OnInit {
  constructor(
    public diaglog: MatDialog,
    public afAuth: AngularFireAuth,
    public snackbar: MatSnackBar
  ) {}

  isLogin = false;
  avtLink = "";
  name='';

  ngOnInit() {
    console.log("It RUN");
    this.afAuth.user.subscribe(userInfo => {
      if (userInfo != null) {
        if (userInfo) {
          userInfo
            .sendEmailVerification()
            .then(() => {
              this.afAuth.auth.signOut();
              this.snackbar.open(
                "Check your email to verify your account",
                "oke",
                { duration: 2000 }
              );
            })
            .catch(err => {
              this.snackbar.open(err, "Ok", { duration: 2000 });
            });
          this.avtLink = userInfo.photoURL;
          this.name=userInfo.displayName;

        }
      }
    });
  }

  onClickLogin() {
    this.diaglog.open(LoginComponent, {
      width: "800px",
      height: "800px"
    });
  }
  @Input()
  public data: any;

 
}
