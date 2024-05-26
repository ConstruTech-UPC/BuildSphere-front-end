export class Worker {

  id: number;
  projectId: number;
  fullName: string;
  teamName: string;
  role: string;
  hoursWorked: number;

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.fullName = '';
    this.teamName = '';
    this.role = '';
    this.hoursWorked = 0;
  }
}
