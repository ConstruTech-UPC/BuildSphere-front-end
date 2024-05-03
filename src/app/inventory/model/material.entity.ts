export class Material {
  id: number;
  projectId: number;
  materialName: string;
  description: string;
  receptionDate: string;
  materialStatus: string;
  amount: number;
  totalCost: number;

  constructor() {
    this.id = 0;
    this.projectId = 0;
    this.materialName = '';
    this.description = '';
    this.receptionDate = '';
    this.materialStatus = '';
    this.amount = 0;
    this.totalCost = 0;
  }
}
