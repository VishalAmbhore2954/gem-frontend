import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-cards',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './inventory-cards.html',
})
export class InventoryCards {
  cards = [
    { title: 'Total Stock', value: '1,240', color: 'bg-[#1A2A40]' },
    { title: 'Sales Today', value: '$8,540', color: 'bg-[#2E4A67]' },
    { title: 'Gold Rate', value: '$2,350', color: 'bg-[#3C6E71]' },
    { title: 'Pending Orders', value: '12', color: 'bg-[#5C4A72]' },
  ];
}
