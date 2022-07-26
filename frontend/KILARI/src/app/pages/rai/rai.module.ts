import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaiComponent } from './rai.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';


import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
// import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])



const routes: Routes = [
  { path: '',
   component: RaiComponent
  },
];

@NgModule({
  imports: [
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    // NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [RaiComponent],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class RaiModule { }
