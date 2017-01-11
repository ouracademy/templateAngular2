/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecuencyImageComponent } from './index.component';

describe('PlannerComponent', () => {
  let component: SecuencyImageComponent;
  let fixture: ComponentFixture<SecuencyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuencyImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuencyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
