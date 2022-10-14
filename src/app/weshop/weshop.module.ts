import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WeshopRoutingModule } from './weshop-routing.module';
import { WeshopComponent } from './weshop.component';
import { WeshopBannerComponent } from './weshop-banner/weshop-banner.component';
import { WeshopItemsComponent } from './weshop-items/weshop-items.component';



@NgModule({
  declarations: [
    WeshopComponent,
    WeshopBannerComponent,
    WeshopItemsComponent
  ],
  imports: [
    CommonModule,
    WeshopRoutingModule,
    NgbModule
  ]
})
export class WeshopModule { }
