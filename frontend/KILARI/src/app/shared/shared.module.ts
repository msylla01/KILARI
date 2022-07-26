import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [ HeaderComponent,SliderComponent,
    FooterComponent,]
})
export class SharedModule { }
