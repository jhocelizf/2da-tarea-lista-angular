import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UppercaseApprovedPipe } from './pipes/uppercaseApproved.pipe'; 


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    StudentsPageComponent,
    UppercaseApprovedPipe,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


