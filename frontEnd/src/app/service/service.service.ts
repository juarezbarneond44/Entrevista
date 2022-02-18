import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = ""
  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/server/";

  }

  getOrders() {
    return this.http.get(`${this.url}getOrders`);
  }
  getOrdersName(name: string) {
    if (name == "") {
      return this.getOrders()
    } else {
      return this.http.post(`${this.url}getOrdersName`, { name: name });
    }

  }
  getPurchase(idPurchase:any){
    return this.http.get(`${this.url}getPurchase/${idPurchase}`, );
  }

}
