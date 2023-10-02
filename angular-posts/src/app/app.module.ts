import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { NavbarComponent } from './shared/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreatePostComponent,
    ListPostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
