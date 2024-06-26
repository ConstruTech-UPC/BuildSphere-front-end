import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentService } from "../../../service/documents-api.service";
import { Document } from "../../../model/document.entity";

@Component({
  selector: 'app-add-document-dialog',
  templateUrl: './add-document-dialog.component.html',
  styleUrls: ['./add-document-dialog.component.css']
})
export class AddDocumentDialogComponent implements OnInit {

  document: Document = new Document();
  selectedFile: File | null = null;

  constructor(
      public dialogRef: MatDialogRef<AddDocumentDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { projectId: number },
      private documentService: DocumentService
  ) { }

  ngOnInit(): void {
    this.document.projectId = this.data.projectId;
    this.document.createdAt = new Date(); // Set current date as default
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  addDocument() {
    if (!this.document.name || !this.document.description || !this.document.createdAt) {
      return; // Do not proceed if any required field is missing
    }

    if (this.selectedFile) {
      this.documentService.uploadDocument(this.document.projectId, this.document, this.selectedFile)
          .subscribe(() => {
            this.dialogRef.close();
          });
    } else {
      this.documentService.createDocument(this.document.projectId, this.document)
          .subscribe(() => {
            this.dialogRef.close();
          });
    }
  }
}
