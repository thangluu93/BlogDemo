
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  userValue ='';
 

  constructor(public db:AngularFirestore) { }

   user=null;

  userRegister(uid){
    this.db.collection("user").snapshotChanges().subscribe(snapshot=>{
      let result=snapshot.map(snap=>snap.payload.doc).filter(doc=>doc.id==uid);
      // console.log(result);
      if(result.length==0){
        this.user= {role: "normal"};
        this.db.collection("user").doc(uid).set(this.user);
      }else{
        this.user = result[0].data();
      }
      console.log(result);
    })
    
  }
 
}
