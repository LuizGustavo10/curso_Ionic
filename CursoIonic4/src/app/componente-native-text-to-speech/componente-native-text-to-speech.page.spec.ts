import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNativeTextToSpeechPage } from './componente-native-text-to-speech.page';

describe('ComponenteNativeTextToSpeechPage', () => {
  let component: ComponenteNativeTextToSpeechPage;
  let fixture: ComponentFixture<ComponenteNativeTextToSpeechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteNativeTextToSpeechPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNativeTextToSpeechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
