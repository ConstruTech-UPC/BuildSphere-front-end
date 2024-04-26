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
import { DocumentListComponent } from './document/component/document-list/document-list.component';
import { WorkersTableComponent } from './colaboration/component/workers-table/workers-table.component';
import { TeamsTableComponent } from './colaboration/component/teams-table/teams-table.component';
import { TaskTableComponent } from './colaboration/component/tasks-table/task-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DocumentListComponent,
    WorkersTableComponent,
    TeamsTableComponent,
    TaskTableComponent
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
    MatIconButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
