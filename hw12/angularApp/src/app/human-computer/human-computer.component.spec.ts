import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanComputerComponent } from './human-computer.component';

describe('HumanComputerComponent', () => {
  let component: HumanComputerComponent;
  let fixture: ComponentFixture<HumanComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
