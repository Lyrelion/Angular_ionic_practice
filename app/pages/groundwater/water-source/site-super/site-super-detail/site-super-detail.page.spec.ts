import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiteSuperDetailPage } from './site-super-detail.page';

describe('SiteSuperDetailPage', () => {
  let component: SiteSuperDetailPage;
  let fixture: ComponentFixture<SiteSuperDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSuperDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiteSuperDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
