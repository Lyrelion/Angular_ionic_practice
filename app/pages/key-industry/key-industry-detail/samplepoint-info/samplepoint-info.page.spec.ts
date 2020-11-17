import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SamplepointInfoPage } from './samplepoint-info.page';

describe('SamplepointInfoPage', () => {
  let component: SamplepointInfoPage;
  let fixture: ComponentFixture<SamplepointInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplepointInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SamplepointInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
