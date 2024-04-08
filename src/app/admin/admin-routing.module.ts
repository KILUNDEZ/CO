import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { MyAccountComponent } from './my-account/my-account.component';


const routes: Routes = [
  { path: "", component: EmailComponent},
  { path: "email", component: EmailComponent},
  { path:"my-account", component: MyAccountComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
