import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgriculturalLandPage } from './agricultural-land.page';

describe('AgriculturalLandPage', () => {
  let component: AgriculturalLandPage;
  let fixture: ComponentFixture<AgriculturalLandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalLandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgriculturalLandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
