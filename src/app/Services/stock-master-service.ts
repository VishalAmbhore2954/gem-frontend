import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockMasterService {
  private apiUrl = environment.apiUrl + 'stock-master';

  constructor(private http: HttpClient) {}

  /**
   * Get all stock masters
   */
  getStockMasters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  /**
   * Get single stock master by ID
   */
  getStockMaster(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /**
   * Create new stock master
   */
  createStockMaster(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  /**
   * Update stock master
   */
  updateStockMaster(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  /**
   * Delete stock master
   */
  deleteStockMaster(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
