import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteV2Component } from './autocomplete-v2.component';

describe('AutocompleteV2Component', () => {
  let component: AutocompleteV2Component;
  let fixture: ComponentFixture<AutocompleteV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
