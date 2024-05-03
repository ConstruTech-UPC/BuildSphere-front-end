import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {DocumentListComponent} from "./document/component/document-list/document-list.component";
import {DocumentsManagementComponent} from "./document/pages/documents-management/documents-management.component";
import {
  CollaborationManagementComponent
} from "./colaboration/pages/collaboration-management/collaboration-management.component";
const routes: Routes = [
  { path: 'documents', component: DocumentsManagementComponent },
  { path: 'collaboration', component: CollaborationManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
