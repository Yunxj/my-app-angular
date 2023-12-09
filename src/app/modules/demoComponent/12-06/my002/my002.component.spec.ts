import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My002Component } from './my002.component';

describe('My002Component', () => {
  let component: My002Component;
  let fixture: ComponentFixture<My002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My002Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(My002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
