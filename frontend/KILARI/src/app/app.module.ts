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
import {AuthGuard} from './services/auth.guard'


import { ToastrModule } from 'ngx-toastr';


import en from '@angular/common/locales/en';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';

// import { NzDemoUploadDragComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module


import { HighchartsChartModule } from 'highcharts-angular';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoyoutGlobalComponent } from './loyout-global/loyout-global.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    HomepageComponent ,
      LoyoutGlobalComponent
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    DemoNgZorroAntdModule,
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
    // NgbModule,
  ],
  providers: [AuthGuard,RaiModule,PlanactionraiModule,TocService,DatePipe,
    { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
