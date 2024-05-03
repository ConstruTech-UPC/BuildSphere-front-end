import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DocumentService} from "../../../service/documents-api.service";
import {Document} from "../../../model/document.entity";

@Component({
  selector: 'app-edit-document-dialog',
  templateUrl: './edit-document-dialog.component.html',
  styleUrls: ['./edit-document-dialog.component.css']
})
export class EditDocumentDialogComponent implements OnInit{

  document!: Document;

  constructor(
    public dialogRef: MatDialogRef<EditDocumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { documentId: number },
    private documentService: DocumentService
  ) { }

  ngOnInit(): void {
    this.documentService.getDocumentById(this.data.documentId)
      .subscribe(document => {
        this.document = document;
      });
  }

  updateDocument() {
    this.documentService.updateDocument(this.document.id, this.document)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
