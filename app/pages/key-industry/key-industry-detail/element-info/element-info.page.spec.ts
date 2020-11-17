import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElementInfoPage } from './element-info.page';

describe('ElementInfoPage', () => {
  let component: ElementInfoPage;
  let fixture: ComponentFixture<ElementInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElementInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
