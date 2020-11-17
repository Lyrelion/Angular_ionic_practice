import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisionPage } from './supervision.page';

describe('SupervisionPage', () => {
  let component: SupervisionPage;
  let fixture: ComponentFixture<SupervisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
