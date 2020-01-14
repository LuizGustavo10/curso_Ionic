import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBadgePage } from './component-badge.page';

describe('ComponentBadgePage', () => {
  let component: ComponentBadgePage;
  let fixture: ComponentFixture<ComponentBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentBadgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
