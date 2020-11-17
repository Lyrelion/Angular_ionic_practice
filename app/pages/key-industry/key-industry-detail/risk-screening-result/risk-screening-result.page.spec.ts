import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiskScreeningResultPage } from './risk-screening-result.page';

describe('RiskScreeningResultPage', () => {
  let component: RiskScreeningResultPage;
  let fixture: ComponentFixture<RiskScreeningResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskScreeningResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiskScreeningResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
