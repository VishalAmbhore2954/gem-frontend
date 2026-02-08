import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StockService } from '../../../Services/stock';
import { log } from 'console';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  totalStock!:any;
  sidebarOpen = false;

  constructor(private stockService:StockService){}

  ngOnInit(): void {
    this.getTotalStock();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  getTotalStock(){
    this.stockService.getTotalStock().subscribe((res:any)=>{
      this.totalStock = res.data.original;
      console.log("stock",this.totalStock);
    })
  }
}
