import { NgModule } from '@angular/core';
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
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgOptimizedImage} from "@angular/common";
import {MatIconButton} from "@angular/material/button";

import { WorkersTableComponent } from './colaboration/component/workers-table/workers-table.component';
import { TeamsTableComponent } from './colaboration/component/teams-table/teams-table.component';
import { TaskTableComponent } from './colaboration/component/tasks-table/task-table.component';

import {HttpClientModule} from "@angular/common/http";
import {TasksService} from "./colaboration/service/tasks-api.service";
import {TeamsService} from "./colaboration/service/teams-api.service";
import {WorkersService} from "./colaboration/service/workers-api.service";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import { CollaborationManagementComponent } from './colaboration/pages/collaboration-management/collaboration-management.component';
import { AddTaskDialogComponent } from './colaboration/component/add-task-dialog/add-task-dialog.component';
import { EditTaskDialogComponent } from './colaboration/component/edit-task-dialog/edit-task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    WorkersTableComponent,
    TeamsTableComponent,
    TaskTableComponent,
    CollaborationManagementComponent,
    AddTaskDialogComponent,
    EditTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatIconButton,///
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync(),///
    TasksService,
    WorkersService,
    TeamsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
