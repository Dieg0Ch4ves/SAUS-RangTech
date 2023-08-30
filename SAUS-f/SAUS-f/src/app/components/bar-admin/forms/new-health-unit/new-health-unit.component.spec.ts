import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHealthUnitComponent } from './new-health-unit.component';

describe('NewHealthUnitComponent', () => {
  let component: NewHealthUnitComponent;
  let fixture: ComponentFixture<NewHealthUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHealthUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHealthUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
