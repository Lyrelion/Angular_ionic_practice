import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiskScreeningNumberPage } from './risk-screening-number.page';

describe('RiskScreeningNumberPage', () => {
  let component: RiskScreeningNumberPage;
  let fixture: ComponentFixture<RiskScreeningNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskScreeningNumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiskScreeningNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
