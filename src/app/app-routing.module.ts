import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './management/pages/project-dashboard/project-dashboard.component';
import { DocumentsManagementComponent } from './document/pages/documents-management/documents-management.component';
import { CollaborationManagementComponent } from './colaboration/pages/collaboration-management/collaboration-management.component';
import { InventoryManagementComponent } from './inventory/pages/inventory-management/inventory-management.component';
import {
  ProjectInformationManagementComponent
} from "./public/components/project-information-management/project-information-management.component";

const routes: Routes = [
  { path: '', component: ProjectInformationManagementComponent },
  { path: 'projects', component: ProjectInformationManagementComponent },
  {
    path: 'projects/:projectId', component: ProjectDashboardComponent, children: [
      { path: 'documents', component: DocumentsManagementComponent },
      { path: 'collaboration', component: CollaborationManagementComponent },
      { path: 'resources', component: InventoryManagementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
