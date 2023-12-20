import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    HomeComponent,
    ChatComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      // radius: 10,
      // outerStrokeWidth: 16,
      // innerStrokeWidth: 8,
      // outerStrokeColor: "#78C000",
      // innerStrokeColor: "#C7E596",
      // animationDuration: 300
    })
  ],
  providers:[
    
  ]
})
export class HomeModule { }
