import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouteInfoPage } from './route-info.page';

describe('RouteInfoPage', () => {
  let component: RouteInfoPage;
  let fixture: ComponentFixture<RouteInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
