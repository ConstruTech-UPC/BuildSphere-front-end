import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DocumentService} from "../../../service/documents-api.service";

@Component({
  selector: 'app-delete-document-dialog',
  templateUrl: './delete-document-dialog.component.html',
  styleUrls: ['./delete-document-dialog.component.css']
})
export class DeleteDocumentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDocumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { documentId: number },
    private documentService: DocumentService
  ) { }

  ngOnInit(): void {
  }

  deleteDocument() {
    this.documentService.deleteDocument(this.data.documentId)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

  cancel() {
    this.dialogRef.close();
  }

}
