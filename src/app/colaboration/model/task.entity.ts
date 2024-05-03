export class Task {

  id: number;
  projectId: number;
  taskName: string;
  taskDescription: string;
  startDate: string;
  maxEndDate: string;
  completionPercentage: number;

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.taskName = '';
    this.taskDescription = '';
    this.startDate = '';
    this.maxEndDate = '';
    this.completionPercentage = 0;
  }

}
