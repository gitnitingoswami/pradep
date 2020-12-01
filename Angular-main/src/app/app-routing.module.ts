import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { SingupComponent } from './singup/singup.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'content',component:ContentComponent},
  {path:'singup',component:SingupComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
