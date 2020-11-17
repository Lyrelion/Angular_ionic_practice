import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThsEnlargeImageComponent } from './ths-enlarge-image.component';

describe('ThsEnlargeImageComponent', () => {
  let component: ThsEnlargeImageComponent;
  let fixture: ComponentFixture<ThsEnlargeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThsEnlargeImageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThsEnlargeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
