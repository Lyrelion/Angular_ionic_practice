import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAboutPage } from './my-about.page';

describe('MyAboutPage', () => {
  let component: MyAboutPage;
  let fixture: ComponentFixture<MyAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
