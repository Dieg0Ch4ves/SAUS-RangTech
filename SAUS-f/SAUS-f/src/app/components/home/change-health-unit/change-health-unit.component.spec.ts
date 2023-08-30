import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeHealthUnitComponent } from './change-health-unit.component';

describe('ChangeHealthUnitComponent', () => {
  let component: ChangeHealthUnitComponent;
  let fixture: ComponentFixture<ChangeHealthUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeHealthUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeHealthUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
