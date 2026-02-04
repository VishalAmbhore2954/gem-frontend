import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stock-master-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stock-master-list.html'
})
export class StockMasterList {
  stockList = [
    { name: 'Gold Ring', category: 'Rings', subcategory: 'Men', purity: '22K' },
    { name: 'Diamond Necklace', category: 'Necklaces', subcategory: 'Women', purity: '18K' },
  ];

  edit(item: any) { console.log('Edit', item); }
  delete(item: any) { console.log('Delete', item); }
}
