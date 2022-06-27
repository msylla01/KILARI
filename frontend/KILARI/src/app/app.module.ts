import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RaiRoutingModule } from './rai/rai-routing.module';
import { ListfilterPipe } from './pipe/listfilter.pipe';
import { FullComponent } from './layouts/full/full.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AccountsRoutingModule } from './accounts/accounts-routing.module';
import { SharedModule } from './shared/shared.module';
import { RaiModule } from './rai/rai.module';
import { TocService } from './services/toc.service';
import { DatePipe } from '@angular/common';
import { PlanactionraiModule } from './planactionrai/planactionrai.module';
import { PlanactionraiRoutingModule } from './planactionrai/planactionrai-routing.module';


import { ToastrModule } from 'ngx-toastr';


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module


import { HighchartsChartModule } from 'highcharts-angular';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoyoutGlobalComponent } from './loyout-global/loyout-global.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    HomepageComponent ,
      LoyoutGlobalComponent
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RaiRoutingModule,
    PlanactionraiRoutingModule,
    AccountsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HighchartsChartModule,
    ToastrModule.forRoot(),
  ],
  providers: [RaiModule,PlanactionraiModule,TocService,DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
