import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './pages/library/library.component';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  
  //{path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'library', component: LibraryComponent},
  //{path: ' ', component: LoginComponent },
  {path: '**', component:NotFoundError},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
