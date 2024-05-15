export class Project {
  id: number;
  name: string;
  description: string;
  location: string;
  startDate: string;
  expectedEndDate: string;
  budget: number;
  urlImage: string;
  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.location = '';
    this.startDate = '';
    this.expectedEndDate = '';
    this.budget = 0;
    this.urlImage = '';
  }
}
