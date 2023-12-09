import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My003Component } from './my003.component';

describe('My003Component', () => {
  let component: My003Component;
  let fixture: ComponentFixture<My003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My003Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(My003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
