import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandHistoryInfoPage } from './land-history-info.page';

describe('LandHistoryInfoPage', () => {
  let component: LandHistoryInfoPage;
  let fixture: ComponentFixture<LandHistoryInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandHistoryInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandHistoryInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
