import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'detail_page', component: DetailpageComponent },
  { path: 'contact_us', component: ContactusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomepageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
