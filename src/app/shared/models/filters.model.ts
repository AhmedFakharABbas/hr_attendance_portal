export interface IFilters {
  department: { id: number, value: string };
  offices: { id: number, value: string };
}

export interface IRoster {
  department_id: string;
  department: string;
  legend: Array<ILegend>;
  meta: Array<IRosterMeta>;
}

interface ILegend {
  shift: string;
  from: Date;
  to: Date;
  color: string;
}

interface IRosterMeta {
  day: string;
  date: Date;
  shift: Array<IShift>;
}

interface IShift {
  color: string;
  shift: string;
  employees: Array<IEmployees>;
}

interface IEmployees {
  thumb: string;
  name: string;
}
