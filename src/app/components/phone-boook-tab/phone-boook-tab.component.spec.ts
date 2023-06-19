import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBoookTabComponent } from './phone-boook-tab.component';

describe('PhoneBoookTabComponent', () => {
  let component: PhoneBoookTabComponent;
  let fixture: ComponentFixture<PhoneBoookTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneBoookTabComponent]
    });
    fixture = TestBed.createComponent(PhoneBoookTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
