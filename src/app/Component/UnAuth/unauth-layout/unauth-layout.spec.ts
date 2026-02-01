import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthLayout } from './unauth-layout';

describe('UnauthLayout', () => {
  let component: UnauthLayout;
  let fixture: ComponentFixture<UnauthLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
