import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InAppBrowserPageRoutingModule } from './in-app-browser-routing.module';

import { InAppBrowserPage } from './in-app-browser.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InAppBrowserPageRoutingModule
  ],
  declarations: [InAppBrowserPage],
  providers: [InAppBrowser]
})
export class InAppBrowserPageModule {}
