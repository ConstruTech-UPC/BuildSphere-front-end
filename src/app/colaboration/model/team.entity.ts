export class Team {

  id: number;
  teamName: string;
  description: string;
  assignedTasks: number[];

  constructor() {
    this.id = 0;
    this.teamName = '';
    this.description = '';
    this.assignedTasks = [];
  }

}
