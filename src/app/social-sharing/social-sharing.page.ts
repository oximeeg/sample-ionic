import { SocialSharing } from 'ionic-native/social-sharing/ngx';

import { Component } from '@angular/core';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.page.html',
  styleUrls: ['./social-sharing.page.scss'],
})
export class SocialSharingPage {

  constructor(private socialSharing: SocialSharing) { }

  onShare() {
    this.socialSharing.share('The message you would like to share');
  }
}