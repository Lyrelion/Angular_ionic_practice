import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpaceFilesPage } from './space-files.page';

describe('SpaceFilesPage', () => {
  let component: SpaceFilesPage;
  let fixture: ComponentFixture<SpaceFilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceFilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaceFilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
