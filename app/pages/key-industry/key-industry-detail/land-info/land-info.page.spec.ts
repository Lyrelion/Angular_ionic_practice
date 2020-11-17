import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandInfoPage } from './land-info.page';

describe('LandInfoPage', () => {
  let component: LandInfoPage;
  let fixture: ComponentFixture<LandInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
