import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDAddmissionComponent } from './ipdaddmission.component';

describe('IPDAddmissionComponent', () => {
  let component: IPDAddmissionComponent;
  let fixture: ComponentFixture<IPDAddmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDAddmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IPDAddmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
