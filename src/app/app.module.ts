
import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BavBarComponent } from './components/bav-bar/bav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './dialog/login/login.component'
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserDataService } from './services/user-data.service';
import {RouterModule} from '@angular/router';
import { PosterComponent } from './components/poster/poster.component'




@NgModule({
  declarations: [
    AppComponent,
    BavBarComponent,
    LoginComponent,
    PosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
      FormsModule,
      ReactiveFormsModule,  
   MatSnackBarModule,
 
   RouterModule,
   LoginComponent,

  ],
  providers: [UserDataService,AngularFirestore,AngularFireAuth],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
