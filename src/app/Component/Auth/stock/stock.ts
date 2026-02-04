import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-stock',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './stock.html',
  styleUrl: './stock.css',
})
export class Stock implements OnInit{

  stockForm!:FormGroup;

  constructor(private fb:FormBuilder,private http:HttpClient){}

  ngOnInit(): void {
    this.initStockForm();
  }

  initStockForm() {
    this.stockForm = this.fb.group({
      stc_item_code: ['', Validators.required],
      stc_item_name: ['', Validators.required],
      stc_item_category: ['', Validators.required],
      stc_sub_category: ['', Validators.required],
      stc_purity: ['', Validators.required],
      stc_gross_weight: ['', Validators.required],
      stc_net_weight: ['', Validators.required],
      stc_westage_percent: ['', Validators.required],
      stc_making_charges: ['', Validators.required],
      stc_rate_per_gm: ['', Validators.required],
      stc_purchase_price: ['', Validators.required],
      stc_selling_price: ['', Validators.required],
      stc_quantity: ['', Validators.required],
      stc_supplier_id: ['', Validators.required],
      stc_stock_staus: ['', Validators.required],
      stc_firm_id: [1, Validators.required],
      stc_user_id: [1, Validators.required],
    });
  }

  submit(){
    console.log("form data is ",this.stockForm.value);
    this.http.post('http://127.0.0.1:8000/api/stock-consolidate',this.stockForm.value).subscribe({
  next: res => console.log('Saved', res),
  error: err => console.error('Error', err)
});
  }

  clearForm(){
    alert("Form clear!");
  }

}
