export class Document {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  projectId: number;
  fileName?: string;
  fileType?: string;
  fileUrl?: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.createdAt = new Date();
    this.projectId = 0;
    this.fileName = '';
    this.fileType = '';
    this.fileUrl = '';
  }
}
