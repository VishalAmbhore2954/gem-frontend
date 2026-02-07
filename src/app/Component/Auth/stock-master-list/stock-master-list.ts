import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { StockMasterService } from '../../../Services/stock-master-service';
import { Toastr } from '../../../Services/toastr';

@Component({
  selector: 'app-stock-master-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stock-master-list.html'
})
export class StockMasterList implements OnInit{

  stockList:any;

  constructor(private stockMasterService:StockMasterService,private toastr:Toastr){}

  ngOnInit(): void {
    this.getStockMasterData();
  }

  getStockMasterData(){
    this.stockMasterService.getStockMasters().subscribe((res:any)=>{
      this.stockList = res.data;
      console.log("ata is",this.stockList)
    })
  }

  edit(item: any) { console.log('Edit', item); }
  
  delete(item: any) { 
    const isConfirm = confirm("Delete Stock master");
    if(isConfirm){
      this.stockMasterService.deleteStockMaster(item.id).subscribe((res:any)=>{
        alert("Stock Master Deleted!");
      })
    }else{
      alert("Stock Master not Deleted!");
    }  
  }
}
