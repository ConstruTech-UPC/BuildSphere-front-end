export class Material {
  id: number;
  projectId: number;
  materialName: string;
  description: string;
  receptionDate: Date;
  materialStatus: string;
  amount: number;
  totalCost: number;

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.materialName = '';
    this.description = '';
    this.receptionDate = new Date();
    this.materialStatus = '';
    this.amount = 0;
    this.totalCost = 0;
  }
}
