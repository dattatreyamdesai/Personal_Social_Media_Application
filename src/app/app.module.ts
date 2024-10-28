import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path: 'post-list',
    component : PostListComponent
  },
  {
    path:"auth",
    component: AuthComponent
  },
  {
    path: "post-add",
    component: PostEditComponent
  },
  {
    path: "post-edit/:index",
    component: PostEditComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent,
    AuthComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
