import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCards } from './inventory-cards';

describe('InventoryCards', () => {
  let component: InventoryCards;
  let fixture: ComponentFixture<InventoryCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
