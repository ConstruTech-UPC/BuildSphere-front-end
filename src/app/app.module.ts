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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DocumentListComponent,
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
    MatIconButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
