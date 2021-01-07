import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  apps = [
    { name: 'In App Browser', path: '/in-app-browser' },
    { name: 'Social Sharing', path: '/social-sharing' }
  ];

  constructor(private router: Router) {}

  navigate(path: string) {
    console.log(`• ${path}`);
    this.router.navigateByUrl(path);
  }
}
