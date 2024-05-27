export class Team {

  id: number;
  projectId: number;
  teamName: string;
  description: string;
  assignedTasks: string[];

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.teamName = '';
    this.description = '';
    this.assignedTasks = [];
  }

}
