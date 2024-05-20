export class Worker {

  id: number;
  projectId: number;
  fullName: string;
  teamId: number;
  role: string;
  hoursWorked: number;

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.fullName = '';
    this.teamId = 0;
    this.role = '';
    this.hoursWorked = 0;
  }
}
