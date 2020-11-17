import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyIndustryPage } from './key-industry.page';

describe('KeyIndustryPage', () => {
  let component: KeyIndustryPage;
  let fixture: ComponentFixture<KeyIndustryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyIndustryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyIndustryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
