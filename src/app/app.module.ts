import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidenavComponent } from './public/components/sidenav/sidenav.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgOptimizedImage} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import { DocumentListComponent } from './document/component/document-list/document-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DocumentsManagementComponent } from './document/pages/documents-management/documents-management.component';
import { EditDocumentDialogComponent } from './document/component/add-delete-edit-document-dialogs/edit-document-dialog/edit-document-dialog.component';
import { DeleteDocumentDialogComponent } from './document/component/add-delete-edit-document-dialogs/delete-document-dialog/delete-document-dialog.component';
import { AddDocumentDialogComponent } from './document/component/add-delete-edit-document-dialogs/add-document-dialog/add-document-dialog.component';
import {
    MatCardModule,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  AddTaskDialogComponent
} from "./colaboration/component/add-delete-edit-task-dialogs/add-task-dialog/add-task-dialog.component";
import {
  DeleteTaskDialogComponent
} from "./colaboration/component/add-delete-edit-task-dialogs/delete-task-dialog/delete-task-dialog.component";
import {
  EditTaskDialogComponent
} from "./colaboration/component/add-delete-edit-task-dialogs/edit-task-dialog/edit-task-dialog.component";
import {
  AddTeamDialogComponent
} from "./colaboration/component/add-delete-edit-team-dialogs/add-team-dialog/add-team-dialog.component";
import {
  DeleteTeamDialogComponent
} from "./colaboration/component/add-delete-edit-team-dialogs/delete-team-dialog/delete-team-dialog.component";
import {
  EditTeamDialogComponent
} from "./colaboration/component/add-delete-edit-team-dialogs/edit-team-dialog/edit-team-dialog.component";
import {
  AddWorkerDialogComponent
} from "./colaboration/component/add-delete-edit-worker-dialogs/add-worker-dialog/add-worker-dialog.component";
import {
  DeleteWorkerDialogComponent
} from "./colaboration/component/add-delete-edit-worker-dialogs/delete-worker-dialog/delete-worker-dialog.component";
import {
  EditWorkerDialogComponent
} from "./colaboration/component/add-delete-edit-worker-dialogs/edit-worker-dialog/edit-worker-dialog.component";
import {TaskTableComponent} from "./colaboration/component/tasks-table/task-table.component";
import {TeamsTableComponent} from "./colaboration/component/teams-table/teams-table.component";
import {WorkersTableComponent} from "./colaboration/component/workers-table/workers-table.component";
import {
  CollaborationManagementComponent
} from "./colaboration/pages/collaboration-management/collaboration-management.component";
import {InventoryManagementComponent} from "./inventory/pages/inventory-management/inventory-management.component";
import {MachineryTableComponent} from "./inventory/components/machinery-table/machinery-table.component";
import {MaterialsTableComponent} from "./inventory/components/materials-table/materials-table.component";
import {
  AddMachineDialogComponent
} from "./inventory/components/add-delete-edit-machine-dialogs/add-machine-dialog/add-machine-dialog.component";
import {
  EditMachineDialogComponent
} from "./inventory/components/add-delete-edit-machine-dialogs/edit-machine-dialog/edit-machine-dialog.component";
import {
  DeleteMachineDialogComponent
} from "./inventory/components/add-delete-edit-machine-dialogs/delete-machine-dialog/delete-machine-dialog.component";
import {
  AddMaterialDialogComponent
} from "./inventory/components/add-delete-edit-material-dialogs/add-material-dialog/add-material-dialog.component";
import {
  EditMaterialDialogComponent
} from "./inventory/components/add-delete-edit-material-dialogs/edit-material-dialog/edit-material-dialog.component";
import {
  DeleteMaterialDialogComponent
} from "./inventory/components/add-delete-edit-material-dialogs/delete-material-dialog/delete-material-dialog.component";
import {ProjectDashboardComponent} from "./management/pages/project-dashboard/project-dashboard.component";
import {ProjectListComponent} from "./management/components/project-list/project-list.component";
import {ProjectCardComponent} from "./management/components/project-card/project-card.component";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {ProjectFormComponent} from "./management/components/project-form/project-form.component";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import { ProjectInformationManagementComponent } from './public/components/project-information-management/project-information-management.component';
import {RouterOutlet} from "@angular/router";
import { LoginComponent } from './authentication/components/login/login.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { WelcomeComponent } from './authentication/components/welcome/welcome.component';
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatPaginator} from "@angular/material/paginator";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DocumentListComponent,
    DocumentsManagementComponent,
    EditDocumentDialogComponent,
    DeleteDocumentDialogComponent,
    AddDocumentDialogComponent,
    AddTaskDialogComponent,
    DeleteTaskDialogComponent,
    EditTaskDialogComponent,
    AddTeamDialogComponent,
    DeleteTeamDialogComponent,
    EditTeamDialogComponent,
    AddWorkerDialogComponent,
    DeleteWorkerDialogComponent,
    EditWorkerDialogComponent,
    TaskTableComponent,
    TeamsTableComponent,
    WorkersTableComponent,
    CollaborationManagementComponent,
    InventoryManagementComponent,
    MachineryTableComponent,
    MaterialsTableComponent,
    AddMachineDialogComponent,
    EditMachineDialogComponent,
    DeleteMachineDialogComponent,
    AddMaterialDialogComponent,
    EditMaterialDialogComponent,
    DeleteMaterialDialogComponent,
    ProjectDashboardComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProjectInformationManagementComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        InputTextModule,
        MatSidenavContainer,
        MatSidenav,
        MatSidenavContent,
        MatListItem,
        MatDivider,
        MatToolbar,
        MatNavList,
        MatIcon,
        MatFormField,
        MatInput,
        NgOptimizedImage,
        MatToolbarRow,
        MatIconButton,
        MatTable,
        MatLabel,
        MatHeaderCell,
        MatCell,
        MatColumnDef,
        MatHeaderCellDef,
        MatCellDef,
        MatHeaderRow,
        MatRow,
        MatHeaderRowDef,
        MatRowDef,
        MatButton,
        FormsModule,
        MatCard,
        MatCardHeader,
        MatCardImage,
        MatCardContent,
        MatCardActions,
        MatDialogTitle,
        MatDialogContent,
        ReactiveFormsModule,
        MatDialogActions,
        MatDialogClose,
        MatCardSubtitle,
        MatCardTitle,
        MatCardModule,
        RouterOutlet,
        CardModule,
        InputTextModule,
        ButtonModule,
        ToastModule,
        BrowserAnimationsModule,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatDatepicker,
        MatSelect,
        MatOption,
        MatPaginator,
        MatMenuTrigger,
        MatMenu,
        MatMenuItem,
        MatHint,
        MatError,
        MatSort,
        MatSortHeader,
        MatNativeDateModule
    ],
  providers: [MessageService, provideAnimationsAsync('noop')],
  bootstrap: [AppComponent]
})
export class AppModule { }