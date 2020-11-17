import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnviromentInvestigationPage } from './enviroment-investigation.page';

describe('EnviromentInvestigationPage', () => {
  let component: EnviromentInvestigationPage;
  let fixture: ComponentFixture<EnviromentInvestigationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviromentInvestigationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnviromentInvestigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
