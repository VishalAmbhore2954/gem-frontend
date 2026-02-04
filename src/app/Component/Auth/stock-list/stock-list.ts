import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  imports: [],
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})

export class StockList {


  stockList = [
    {
      id: 1,
      stc_item_code: 'ITM-001',
      stc_item_name: 'Gold Ring',
      stc_item_category: 'Rings',
      stc_sub_category: 'Men',
      stc_purity: '22K',
      stc_gross_weight: '10.5',
      stc_net_weight: '9.8',
      stc_westage_percent: '5',
      stc_making_charges: '1500',
      stc_rate_per_gm: '4500',
      stc_purchase_price: '50000',
      stc_selling_price: '65000',
      stc_quantity: '1',
      stc_supplier_id: 'SUP-001',
      stc_stock_staus: 'Available',
      stc_firm_id: 'FIRM-001',
      stc_master_id: 'MASTER-001',
      stc_user_id: 'USER-001',
      created_at: '2026-02-01',
      updated_at: '2026-02-02',
    },
    // Add more dummy data...
  ];
}
