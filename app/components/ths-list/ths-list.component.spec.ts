import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThsListComponent } from './ths-list.component';

describe('ThsListComponent', () => {
  let component: ThsListComponent;
  let fixture: ComponentFixture<ThsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThsListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
