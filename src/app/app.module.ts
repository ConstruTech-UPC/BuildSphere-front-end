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
import {MatButton, MatIconButton} from "@angular/material/button";
import { DocumentListComponent } from './document/component/document-list/document-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DocumentsManagementComponent } from './document/pages/documents-management/documents-management.component';
import { EditDocumentDialogComponent } from './document/component/add-delete-edit-document-dialogs/edit-document-dialog/edit-document-dialog.component';
import { DeleteDocumentDialogComponent } from './document/component/add-delete-edit-document-dialogs/delete-document-dialog/delete-document-dialog.component';
import { AddDocumentDialogComponent } from './document/component/add-delete-edit-document-dialogs/add-document-dialog/add-document-dialog.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DocumentListComponent,
    DocumentsManagementComponent,
    EditDocumentDialogComponent,
    DeleteDocumentDialogComponent,
    AddDocumentDialogComponent,
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
    MatTable,
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
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
