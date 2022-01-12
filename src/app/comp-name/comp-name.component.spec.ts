import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNameComponent } from './comp-name.component';

describe('CompNameComponent', () => {
  let component: CompNameComponent;
  let fixture: ComponentFixture<CompNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
