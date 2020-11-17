import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroundwaterPage } from './groundwater.page';

describe('GroundwaterPage', () => {
  let component: GroundwaterPage;
  let fixture: ComponentFixture<GroundwaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundwaterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroundwaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
