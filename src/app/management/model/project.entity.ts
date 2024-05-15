export class Project {
  id: number;
  task_id: number;
  team_id: number;
  worker_id: number;
  document_id: number;
  machine_id: number;
  material_id: number;
  name: string;
  description: string;
  location: string;
  startDate: string;
  expectedEndDate: string;
  budget: number;
  urlImage: string;
  constructor() {
    this.id = 0;
    this.task_id = 0;
    this.team_id = 0;
    this.worker_id = 0;
    this.document_id = 0;
    this.machine_id = 0;
    this.material_id = 0;
    this.name = '';
    this.description = '';
    this.location = '';
    this.startDate = '';
    this.expectedEndDate = '';
    this.budget = 0;
    this.urlImage = '';
  }
}
