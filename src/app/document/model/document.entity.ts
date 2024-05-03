export class Document {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  projectId: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.createdAt = new Date();
    this.projectId = 0;
  }
}
