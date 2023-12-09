import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My004Component } from './my004.component';

describe('My004Component', () => {
  let component: My004Component;
  let fixture: ComponentFixture<My004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My004Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(My004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
