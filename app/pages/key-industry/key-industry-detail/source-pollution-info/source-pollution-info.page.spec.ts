import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SourcePollutionInfoPage } from './source-pollution-info.page';

describe('SourcePollutionInfoPage', () => {
  let component: SourcePollutionInfoPage;
  let fixture: ComponentFixture<SourcePollutionInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcePollutionInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SourcePollutionInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
