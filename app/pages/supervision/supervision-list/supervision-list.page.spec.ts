import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisionListPage } from './supervision-list.page';

describe('SupervisionListPage', () => {
  let component: SupervisionListPage;
  let fixture: ComponentFixture<SupervisionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisionListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
