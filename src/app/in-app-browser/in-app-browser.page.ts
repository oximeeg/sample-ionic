import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-in-app-browser',
  templateUrl: './in-app-browser.page.html',
  styleUrls: ['./in-app-browser.page.scss'],
})
export class InAppBrowserPage {

  constructor(private inAppBrowser: InAppBrowser) { }

  onShow() {
    this.inAppBrowser.create('https://ionicframework.com/').show();
  }
}
