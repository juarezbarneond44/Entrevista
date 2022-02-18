import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  idPurchase:any;
  data:any
  constructor(private rutaActiva: ActivatedRoute,private service: ServiceService) {
   
 
   }
  ngOnInit(): void {
    this.idPurchase= this.rutaActiva.snapshot.params;
    this.service.getPurchase(this.idPurchase.idPurchase).subscribe((res) => {
      this.data=res;
      console.log(res)
    });

  }
}
