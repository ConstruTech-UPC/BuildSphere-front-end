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
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgOptimizedImage} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import { DocumentListComponent } from './document/component/document-list/document-list.component';
import { WorkersTableComponent } from './colaboration/component/workers-table/workers-table.component';
import { TeamsTableComponent } from './colaboration/component/teams-table/teams-table.component';
import { TaskTableComponent } from './colaboration/component/tasks-table/task-table.component';
import { ProjectCardComponent } from './management/components/project-card/project-card.component';
import { ProjectFormComponent } from './management/components/project-form/project-form.component';
import {HttpClientModule} from "@angular/common/http";
import {ProjectsService} from "./management/services/projects.service";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import { ProjectDashboardComponent } from './management/pages/project-dashboard/project-dashboard.component';
import { ProjectListComponent } from './management/components/project-list/project-list.component';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DocumentListComponent,
    WorkersTableComponent,
    TeamsTableComponent,
    TaskTableComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProjectDashboardComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardTitle,
    MatCardSubtitle,
    MatLabel,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput
  ],
  providers: [
    provideAnimationsAsync(), ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
