import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterPage } from './twitter.page';

describe('TwitterPage', () => {
  let component: TwitterPage;
  let fixture: ComponentFixture<TwitterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
