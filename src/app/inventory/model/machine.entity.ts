export class Machine {
  id: number;
  projectId: number;
  machineName: string;
  description: string;
  receptionDate: string;
  endDate: string;
  totalCost: number;

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.machineName = '';
    this.description = '';
    this.receptionDate = '';
    this.endDate = '';
    this.totalCost = 0;
  }
}
