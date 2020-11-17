import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgriculturalLandComponentComponent } from './agricultural-land-component.component';

describe('AgriculturalLandComponentComponent', () => {
  let component: AgriculturalLandComponentComponent;
  let fixture: ComponentFixture<AgriculturalLandComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalLandComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgriculturalLandComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
