import { Input } from "@angular/core";
import { UserDataService } from "./../../services/user-data.service";
import { LoginComponent } from "./../../dialog/login/login.component";
import { Component, OnInit, Inject, Output } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-bav-bar",
  templateUrl: "./bav-bar.component.html",
  styleUrls: ["./bav-bar.component.scss"]
})
export class BavBarComponent implements OnInit {
  constructor(public diaglog: MatDialog) {}

  isLogin = false;
  button = null;

  ngOnInit() {}

  onClickLogin() {
    this.diaglog.open(LoginComponent, {
      width: "800px",
      height: "800px"
    });
  }
  @Input()
  public data: any;
  
  printf() {
    console.log(this.data);
  }

  // chageButton(){
  //   if (this.isLogin==false){
  //     return this.button= 'LOGIN'
  //   }else{

  //   }

  // }
}
