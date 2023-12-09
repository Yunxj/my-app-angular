import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My001Component } from './my001.component';

describe('My001Component', () => {
  let component: My001Component;
  let fixture: ComponentFixture<My001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(My001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
