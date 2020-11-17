import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyIndustryDetailPage } from './key-industry-detail.page';

describe('KeyIndustryDetailPage', () => {
  let component: KeyIndustryDetailPage;
  let fixture: ComponentFixture<KeyIndustryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyIndustryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyIndustryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
