import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StockService } from '../../../Services/stock';
import { Toastr } from '../../../Services/toastr';

@Component({
  selector: 'app-stock',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './stock.html',
  styleUrl: './stock.css',
})
export class Stock implements OnInit{

  stockForm!:FormGroup;

  constructor(private fb:FormBuilder,private stockService:StockService,private toastr:Toastr){}

  ngOnInit(): void {
    this.initStockForm();
    this.getNextCode();
  }

  initStockForm() {
    this.stockForm = this.fb.group({
      stc_item_code: ['', Validators.required],
      stc_item_type: ['', Validators.required],
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
    this.stockService.createStock(this.stockForm.value).subscribe((res:any)=>{
      this.toastr.showSuccess("Stock stored successfully");
      this.getNextCode();
    });
  }

  getNextCode(){
    this.stockService.getNextCode().subscribe((res:any)=>{
      const code = res.data;
      console.log("code is",code);
      this.stockForm.patchValue({
        stc_item_code : code,
      })
    })
  }

  clearForm(){
    alert("Form clear!");
  }

}
