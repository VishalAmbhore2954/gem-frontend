import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../Services/stock';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  imports: [RouterLink],
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})

export class StockList implements OnInit{

  stockList:any;

  constructor(private stockService:StockService,private router:Router){}

  ngOnInit() {
    this.getStockData();
  }

  getStockData(){
    this.stockService.getStocks().subscribe((res:any)=>{
      this.stockList = res.data;
    })
  }

  editStock(item:any){

  }

  deleteStock(item:any){
    const isConfirm = confirm("Delete "+item.stc_item_name + "from stock")
    if(isConfirm){
      this.stockService.deleteStock(item.id).subscribe((res:any)=>{
        alert("Stock "+item.stc_item_nsme+ "deleted with quantity "+item.stc_quantity);
      })
    }else{
      alert("Stock not deleted");
    }
  }

  geToStock(){
    this.router.navigate(['/stock'])
  }
}
