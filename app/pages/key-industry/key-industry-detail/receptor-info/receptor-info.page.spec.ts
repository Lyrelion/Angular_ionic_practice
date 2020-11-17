import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceptorInfoPage } from './receptor-info.page';

describe('ReceptorInfoPage', () => {
  let component: ReceptorInfoPage;
  let fixture: ComponentFixture<ReceptorInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptorInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptorInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
