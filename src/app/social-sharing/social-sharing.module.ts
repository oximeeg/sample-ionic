import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialSharingPageRoutingModule } from './social-sharing-routing.module';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SocialSharingPage } from './social-sharing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialSharingPageRoutingModule
  ],
  declarations: [SocialSharingPage],
  providers: [SocialSharing]
})
export class SocialSharingPageModule {}
