export class Team {

  id: number;
  projectId: number;
  teamName: string;
  description: string;
  assignedTasks: number[];

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.teamName = '';
    this.description = '';
    this.assignedTasks = [];
  }

}
