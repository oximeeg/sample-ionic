import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InAppBrowserPage } from './in-app-browser.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { RouterTestingModule } from '@angular/router/testing';

describe('InAppBrowserPage', () => {
  let component: InAppBrowserPage;
  let fixture: ComponentFixture<InAppBrowserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppBrowserPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [InAppBrowser]
    }).compileComponents();

    fixture = TestBed.createComponent(InAppBrowserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
