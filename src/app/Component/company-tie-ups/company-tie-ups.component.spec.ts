import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTieUpsComponent } from './company-tie-ups.component';

describe('CompanyTieUpsComponent', () => {
  let component: CompanyTieUpsComponent;
  let fixture: ComponentFixture<CompanyTieUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTieUpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTieUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
