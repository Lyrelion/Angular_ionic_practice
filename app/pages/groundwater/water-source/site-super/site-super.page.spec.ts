import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiteSuperPage } from './site-super.page';

describe('SiteSuperPage', () => {
  let component: SiteSuperPage;
  let fixture: ComponentFixture<SiteSuperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSuperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiteSuperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
