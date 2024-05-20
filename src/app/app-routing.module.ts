import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {DocumentListComponent} from "./document/component/document-list/document-list.component";
import {DocumentsManagementComponent} from "./document/pages/documents-management/documents-management.component";
import {
  CollaborationManagementComponent
} from "./colaboration/pages/collaboration-management/collaboration-management.component";
import {InventoryManagementComponent} from "./inventory/pages/inventory-management/inventory-management.component";
import {ProjectDashboardComponent} from "./management/pages/project-dashboard/project-dashboard.component";
const routes: Routes = [
  { path: 'documents', component: DocumentsManagementComponent },
  { path: 'collaboration', component: CollaborationManagementComponent },
  { path: 'inventory', component: InventoryManagementComponent },
  { path: 'projects', component: ProjectDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
