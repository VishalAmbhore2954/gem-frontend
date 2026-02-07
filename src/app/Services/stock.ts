import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient){}

  getStocks(){
    return this.http.get(this.apiUrl+'stock-consolidate');
  }

  createStock(data:any){
    return this.http.post(this.apiUrl+'stock-consolidate',data);
  }

  updateStock(id:number,data:any){
    return this.http.put(this.apiUrl+'stock-consolidate/'+id,data);
  }

  deleteStock(id:number){
    return this.http.delete(this.apiUrl+'stock-consolidate/'+id);
  }

  getNextCode(){
    return this.http.get(this.apiUrl+'stock-consolidate/itemcode');
  }
}
