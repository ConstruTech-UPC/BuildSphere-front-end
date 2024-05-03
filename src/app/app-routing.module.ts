import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {DocumentListComponent} from "./document/component/document-list/document-list.component";
import {DocumentsManagementComponent} from "./document/pages/documents-management/documents-management.component";
const routes: Routes = [
  { path: 'documents', component: DocumentsManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
