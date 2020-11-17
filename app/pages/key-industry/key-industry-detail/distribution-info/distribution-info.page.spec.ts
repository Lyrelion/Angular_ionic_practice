import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistributionInfoPage } from './distribution-info.page';

describe('DistributionInfoPage', () => {
  let component: DistributionInfoPage;
  let fixture: ComponentFixture<DistributionInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistributionInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
