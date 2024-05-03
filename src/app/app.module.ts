import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClientModule} from "@angular/common/http";
import {MaterialsService} from "./inventory/services/materials.service";
import {MachineryService} from "./inventory/services/machinery.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { AddDeleteEditMaterialComponent } from './inventory/components/add-delete-edit-material/add-delete-edit-material.component';
import { AddDeleteEditMachineComponent } from './inventory/components/add-delete-edit-machine/add-delete-edit-machine.component';
import { MachineryTableComponent } from './inventory/components/machinery-table/machinery-table.component';
import { MaterialsTableComponent } from './inventory/components/materials-table/materials-table.component';
import {InventoryManagementComponent} from "./inventory/pages/inventory-management/inventory-management.component";
import { AddMachineDialogComponent } from './inventory/components/add-delete-edit-machine-dialogs/add-machine-dialog/add-machine-dialog.component';
import { EditMachineDialogComponent } from './inventory/components/add-delete-edit-machine-dialogs/edit-machine-dialog/edit-machine-dialog.component';
import { DeleteMachineDialogComponent } from './inventory/components/add-delete-edit-machine-dialogs/delete-machine-dialog/delete-machine-dialog.component';
import { AddMaterialDialogComponent } from './inventory/components/add-delete-edit-material-dialogs/add-material-dialog/add-material-dialog.component';
import { EditMaterialDialogComponent } from './inventory/components/add-delete-edit-material-dialogs/edit-material-dialog/edit-material-dialog.component';
import { DeleteMaterialDialogComponent } from './inventory/components/add-delete-edit-material-dialogs/delete-material-dialog/delete-material-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryManagementComponent,
    AddDeleteEditMaterialComponent,
    AddDeleteEditMachineComponent,
    MachineryTableComponent,
    MaterialsTableComponent,
    AddMachineDialogComponent,
    EditMachineDialogComponent,
    DeleteMachineDialogComponent,
    AddMaterialDialogComponent,
    EditMaterialDialogComponent,
    DeleteMaterialDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule

  ],
  providers: [
    MaterialsService,
    MachineryService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
