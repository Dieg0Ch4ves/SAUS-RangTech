import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSchedulingComponent } from './change-scheduling.component';

describe('ChangeSchedulingComponent', () => {
  let component: ChangeSchedulingComponent;
  let fixture: ComponentFixture<ChangeSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSchedulingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
