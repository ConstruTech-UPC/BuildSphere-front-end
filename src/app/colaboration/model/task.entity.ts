export class Task {

  id: number;
  taskName: string;
  description: string;
  startDate: string;
  maxEndDate: string;
  completionPercentage: number;

  constructor() {
    this.id = 0;
    this.taskName = '';
    this.description = '';
    this.startDate = '';
    this.maxEndDate = '';
    this.completionPercentage = 0;
  }

}
