import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationManagementComponent} from "./colaboration/pages/collaboration-management/collaboration-management.component";

const routes: Routes = [
  { path: 'collaboration', component: CollaborationManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
