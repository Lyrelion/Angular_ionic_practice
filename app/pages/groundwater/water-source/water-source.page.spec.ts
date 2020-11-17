import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaterSourcePage } from './water-source.page';

describe('WaterSourcePage', () => {
  let component: WaterSourcePage;
  let fixture: ComponentFixture<WaterSourcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterSourcePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaterSourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
