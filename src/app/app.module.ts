import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';





import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { YoutubePipe } from './youtube.pipe';
import { ContainerWebComponent } from './container-web/container-web.component';
import { ContainerBookComponent } from './container-book/container-book.component';
import { Routes, RouterModule } from '@angular/router';
import { ContainerProfilesComponent } from './container-profiles/container-profiles.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';
const appRoute: Routes =[
  {path:'',component:ContainerComponent},
  {path:'Home',component:ContainerComponent},
  {path:'Webseries',component:ContainerWebComponent},
  {path:'Books',component:ContainerBookComponent},
  {path:'Profiles',component:ContainerProfilesComponent}
 
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContainerComponent,
    FooterComponent,
    YoutubePipe,
    ContainerWebComponent,
    ContainerBookComponent,
    ContainerProfilesComponent,
    SearchComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
