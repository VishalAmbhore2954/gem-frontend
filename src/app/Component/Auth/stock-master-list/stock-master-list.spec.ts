import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMasterList } from './stock-master-list';

describe('StockMasterList', () => {
  let component: StockMasterList;
  let fixture: ComponentFixture<StockMasterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockMasterList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockMasterList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
