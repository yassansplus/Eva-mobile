import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringPage } from './entering.page';

describe('EnteringPage', () => {
  let component: EnteringPage;
  let fixture: ComponentFixture<EnteringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteringPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
