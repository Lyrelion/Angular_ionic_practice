import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgriculturalLandDetailListPage } from './agricultural-land-detail-list.page';

describe('AgriculturalLandDetailListPage', () => {
  let component: AgriculturalLandDetailListPage;
  let fixture: ComponentFixture<AgriculturalLandDetailListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriculturalLandDetailListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgriculturalLandDetailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
