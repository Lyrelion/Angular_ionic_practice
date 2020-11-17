import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyIndustryListPage } from './key-industry-list.page';

describe('KeyIndustryListPage', () => {
  let component: KeyIndustryListPage;
  let fixture: ComponentFixture<KeyIndustryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyIndustryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyIndustryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
