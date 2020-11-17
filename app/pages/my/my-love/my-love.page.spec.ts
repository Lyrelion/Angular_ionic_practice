import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyLovePage } from './my-love.page';

describe('MyLovePage', () => {
  let component: MyLovePage;
  let fixture: ComponentFixture<MyLovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyLovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
