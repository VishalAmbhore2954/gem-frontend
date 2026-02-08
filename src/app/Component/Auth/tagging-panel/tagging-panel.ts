import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tagging-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tagging-panel.html',
  styleUrls: ['./tagging-panel.css'],
})
export class TaggingPanel implements OnInit {

  // Dummy wholesale data (later you will get from API / route)
  wholesaleItem = {
    item_code: 'ITM-1023',
    item_name: 'Gold Ring',
    purity: '22K',
    total_qty: 10,
    total_weight: 50 // grams
  };

  tagCount: number = 0;
  tagWeight: number = 0;

  calculatedWeightPerTag: number = 0;
  remainingWeight: number = 0;

  ngOnInit(): void {}

  calculateTags() {
    if (this.tagCount > 0) {
      this.calculatedWeightPerTag = +(this.tagWeight / this.tagCount).toFixed(3);
      this.remainingWeight = +(
        this.wholesaleItem.total_weight - this.tagWeight
      ).toFixed(3);
    }
  }

  generateTags() {
    const tags = [];

    for (let i = 1; i <= this.tagCount; i++) {
      tags.push({
        tag_no: `${this.wholesaleItem.item_code}-T${i}`,
        weight: this.calculatedWeightPerTag,
        purity: this.wholesaleItem.purity,
      });
    }

    console.log('Generated Tags:', tags);
    alert('Tags generated (dummy). Check console.');
  }
}
