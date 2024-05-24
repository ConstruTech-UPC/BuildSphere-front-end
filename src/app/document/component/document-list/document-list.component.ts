import { Component, OnInit, Input } from '@angular/core';
import { Document } from "../../model/document.entity";
import { DocumentService } from "../../service/documents-api.service";
import { MatDialog } from "@angular/material/dialog";
import { AddDocumentDialogComponent } from "../add-delete-edit-document-dialogs/add-document-dialog/add-document-dialog.component";
import { EditDocumentDialogComponent } from "../add-delete-edit-document-dialogs/edit-document-dialog/edit-document-dialog.component";
import { DeleteDocumentDialogComponent } from "../add-delete-edit-document-dialogs/delete-document-dialog/delete-document-dialog.component";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  //styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Input() projectId!: number;
  documents: Document[] = [];
  displayedColumns: string[] = ['name', 'description', 'createdAt', 'actions'];

  constructor(private dialog: MatDialog, private documentService: DocumentService) { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments() {
    this.documentService.getDocumentsByProject(this.projectId)
        .subscribe(documents => {
          this.documents = documents;
        });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddDocumentDialogComponent, {
      data: { projectId: this.projectId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadDocuments();
    });
  }

  openEditDialog(documentId: number): void {
    if (documentId) {
      const dialogRef = this.dialog.open(EditDocumentDialogComponent, {
        data: { documentId: documentId }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.loadDocuments();
      });
    }
  }

  openDeleteDialog(documentId: number) {
    const dialogRef = this.dialog.open(DeleteDocumentDialogComponent, {
      data: { documentId: documentId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadDocuments();
    });
  }

  triggerFileInput(documentId: number) {
    const fileInput = document.querySelector(`input[type="file"][data-document-id="${documentId}"]`) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: Event, documentId: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.uploadFile(documentId, file);
    }
  }

  uploadFile(documentId: number, file: File) {
    const document = this.documents.find(doc => doc.id === documentId);
    if (document) {
      this.documentService.uploadDocument(this.projectId, document, file)
          .subscribe(() => {
            this.loadDocuments();
          });
    }
  }
}
