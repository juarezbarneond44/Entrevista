import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'detail/:idPurchase', component: DetailComponent },
  { path: '', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
