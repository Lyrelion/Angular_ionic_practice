import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AroundPage } from './around.page';

describe('AroundPage', () => {
  let component: AroundPage;
  let fixture: ComponentFixture<AroundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AroundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
