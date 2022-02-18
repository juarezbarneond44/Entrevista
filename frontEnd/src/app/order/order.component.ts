import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {



  
  constructor(private service: ServiceService) { }
  data: any;
  auxData: any;
  position = -1;
  MaxPosition = 0;
  interval = 3;
  orderName = ""
 
// Get the browser window size
 windowWidth = window.innerWidth;
 windowHeight = window.innerHeight;

 
  ngOnInit(): void {
    this.service.getOrders().subscribe((res) => {
      this.data = res
      this.position = -1;
      this.MaxPosition = Math.floor(this.data.length / this.interval);
      this.after();
      
    });
 
  }

  // obtener las 3 ordenes anteriores
  before() {
    if (this.position == 0) { return };
    this.auxData = [];
    this.position = this.position - 1;
    for (let x = 0; x < this.interval; x++) {
      const aux = this.position * this.interval + x;
      if (aux < this.data.length) { this.auxData.push(this.data[aux]); };


    }
  }

 

  // obtener las 3 ordenes posteriores
  after() {
    if (this.position == this.MaxPosition) { return };
    this.auxData = [];
    this.position = this.position + 1;

    for (let x = 0; x < this.interval; x++) {
      const aux = this.position * this.interval + x;
      if (aux < this.data.length) { this.auxData.push(this.data[aux]); };

    }

  }

  
  // obtener la orden buscando por nombre
  findOrderName() {
    this.service.getOrdersName(this.orderName).subscribe((res) => {
      this.data = res
      this.position = -1;
      this.MaxPosition = Math.floor(this.data.length / this.interval);
      this.after();
      this.orderName = ""
    });
  }
}
