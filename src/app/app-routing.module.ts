import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './management/pages/project-dashboard/project-dashboard.component';
import { DocumentsManagementComponent } from './document/pages/documents-management/documents-management.component';
import { CollaborationManagementComponent } from './colaboration/pages/collaboration-management/collaboration-management.component';
import { InventoryManagementComponent } from './inventory/pages/inventory-management/inventory-management.component';
import {
  ProjectInformationManagementComponent
} from "./public/components/project-information-management/project-information-management.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {SupportManagementComponent} from "./support/pages/support-management/support-management.component";

const routes: Routes = [

  {path: '',redirectTo: '/sign-in', pathMatch: 'full'},
    
  { path: '', component: ProjectInformationManagementComponent },
  { path: 'projects', component: ProjectInformationManagementComponent },
  {
    path: 'projects/:projectId', component: ProjectDashboardComponent, children: [
      { path: 'documents', component: DocumentsManagementComponent },
      { path: 'collaboration', component: CollaborationManagementComponent },
      { path: 'inventory', component: InventoryManagementComponent },
      { path: 'support', component: SupportManagementComponent }
    ]
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
