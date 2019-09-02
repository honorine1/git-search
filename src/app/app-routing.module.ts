import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { FormComponentComponent } from './components/form-component/form-component.component';


const routes: Routes = [
  {path:'repos', component:ProfileComponent},
  {path:'search',component:FormComponentComponent},
  {path:'profile',component:ProfileComponent},
  {path:'repos/:profile',component:ProfileComponent},
  {path:'',redirectTo:"/search",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
