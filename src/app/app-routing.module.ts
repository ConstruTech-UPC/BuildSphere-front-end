import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentsManagementComponent} from "./document/pages/documents-management/documents-management.component";
import {
  CollaborationManagementComponent
} from "./colaboration/pages/collaboration-management/collaboration-management.component";
import {InventoryManagementComponent} from "./inventory/pages/inventory-management/inventory-management.component";
import {ProjectDashboardComponent} from "./management/pages/project-dashboard/project-dashboard.component";
const routes: Routes = [
  { path: '', component: ProjectDashboardComponent },
  { path: 'documents/:projectId', component: DocumentsManagementComponent },
  { path: 'collaboration/:projectId', component: CollaborationManagementComponent },
  { path: 'inventory/:projectId', component: InventoryManagementComponent },
  { path: 'projects', component: ProjectDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
