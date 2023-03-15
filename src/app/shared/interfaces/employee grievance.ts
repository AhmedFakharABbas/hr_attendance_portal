export interface EmployeeGrievance {
  id: number;
 name: string;
 employeeDeprtment:string;
 employeeDesignation:string;
againstId:number;
 against: string;

  targetTypeId:number;
 againstDepartment:string;
 againstDesignation:string;

  applicationDate: string;

  from: string;
  to:string;
  type: string;
  status:string;
}
