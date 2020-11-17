import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RuralEnvironmentPage } from './rural-environment.page';

describe('RuralEnvironmentPage', () => {
  let component: RuralEnvironmentPage;
  let fixture: ComponentFixture<RuralEnvironmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuralEnvironmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RuralEnvironmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
