import { Component, OnInit } from '@angular/core';
import { Document } from '../../model/document';
import {DocumentService} from "../../service/documents-api.service"; // Importamos la clase Document

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = []; // Array para almacenar los documentos

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documentService.getDocuments()
      .subscribe(documents => this.documents = documents);
  }
}



