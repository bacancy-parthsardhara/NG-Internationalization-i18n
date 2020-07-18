import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CertificateComponent } from './certificate/certificate.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch:'full'
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'certificate',
    component:CertificateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
