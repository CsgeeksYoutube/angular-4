import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RedColorDirective } from './red-color.directive';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataService } from './services/data.service';

const appRoutes: Routes = [
  { path: 'user', //locahost//user
  component: UserComponent 
},

{
   path: '', 
  component: HomeComponent 

}
  ];



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RedColorDirective,
    HomeComponent,
    
   
    
    
  ],
  imports: [
     RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
