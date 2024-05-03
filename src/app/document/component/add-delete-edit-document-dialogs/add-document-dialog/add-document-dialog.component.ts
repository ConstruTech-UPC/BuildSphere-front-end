import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DocumentService} from "../../../service/documents-api.service";
import {Document} from "../../../model/document.entity";

@Component({
  selector: 'app-add-document-dialog',
  templateUrl: './add-document-dialog.component.html',
  styleUrls: ['./add-document-dialog.component.css']
})
export class AddDocumentDialogComponent implements OnInit{

  document: Document = new Document();

  constructor(
    public dialogRef: MatDialogRef<AddDocumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projectId: number }, // We receive the projectId as data
    private documentService: DocumentService
  ) { }

  ngOnInit(): void {
    this.document.projectId = this.data.projectId; // We assign the projectId to the document
  }

  addDocument() {
    this.documentService.createDocument(this.document.projectId, this.document)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
