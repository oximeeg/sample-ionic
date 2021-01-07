import { SocialSharing } from 'ionic-native/social-sharing/ngx';

import { Component } from '@angular/core';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.page.html',
  styleUrls: ['./social-sharing.page.scss']
})
export class SocialSharingPage {
  constructor(private socialSharing: SocialSharing) {}

  onShare() {
    this.socialSharing
      .share('The message you would like to share')
      .then((result) => {
        console.log(`• onShare result:${result}`);
        if (!result) {
          this.close();
        }
      })
      .catch(console.log);
  }

  onClose(ms: number) {
    setTimeout(() => {
      this.close();
    }, ms);
  }

  private close() {
    this.socialSharing.close().catch(console.log);
  }
}
