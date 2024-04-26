export class Document {
  id: number;
  name: string;
  description: string;
  createdAt: Date;

  constructor(id: number, name: string, description: string, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
  }
  
}
