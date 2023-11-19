import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My102DataComponent } from './my102-data.component';

describe('My102DataComponent', () => {
  let component: My102DataComponent;
  let fixture: ComponentFixture<My102DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My102DataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(My102DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
