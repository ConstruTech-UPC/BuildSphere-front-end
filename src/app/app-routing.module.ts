import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryManagementComponent} from "./inventory/pages/inventory-management/inventory-management.component";

const routes: Routes = [
  { path: 'inventory', component: InventoryManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
