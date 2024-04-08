import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
