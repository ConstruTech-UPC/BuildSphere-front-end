import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentListComponent} from "./document/component/document-list/document-list.component";

const routes: Routes = [
  { path: 'documents', component: DocumentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
