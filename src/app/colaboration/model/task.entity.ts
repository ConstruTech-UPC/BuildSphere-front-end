export class Task {

  id: number;
  projectId: number;
  teamId: number;
  taskName: string;
  taskDescription: string;
  startDate: string;
  maxEndDate: string;

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.teamId = 0;
    this.taskName = '';
    this.taskDescription = '';
    this.startDate = '';
    this.maxEndDate = '';
  }

}
