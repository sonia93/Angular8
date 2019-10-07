import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  {path :'auth' ,component:AuthComponent},
  {path :'layout' ,component:LayoutComponent},
  {path :'navbar' ,component:NavbarComponent},
  {path :'leftmenu' ,component:LeftmenuComponent},
  {path :'content' ,component:ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AuthComponent,LayoutComponent,NavbarComponent,LeftmenuComponent,ContentComponent]
