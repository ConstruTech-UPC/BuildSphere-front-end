export class Machine {
  id: number;
  projectId: number;
  machineName: string;
  description: string;
  receptionDate: Date;
  endDate: Date;
  totalCost: number;

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.machineName = '';
    this.description = '';
    this.receptionDate = new Date();
    this.endDate = new Date()
    this.totalCost = 0;
  }
}
