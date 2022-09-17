import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteV1Component } from './autocomplete-v1.component';

describe('AutocompleteV1Component', () => {
  let component: AutocompleteV1Component;
  let fixture: ComponentFixture<AutocompleteV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
