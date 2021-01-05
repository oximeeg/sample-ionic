import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicModule } from '@ionic/angular';

import { SocialSharingPage } from './social-sharing.page';

describe('SocialSharingPage', () => {
  let component: SocialSharingPage;
  let fixture: ComponentFixture<SocialSharingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSharingPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [SocialSharing]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialSharingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
