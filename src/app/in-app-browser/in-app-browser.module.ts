import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicModule } from '@ionic/angular';

import { InAppBrowserPageRoutingModule } from './in-app-browser-routing.module';
import { InAppBrowserPage } from './in-app-browser.page';

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
