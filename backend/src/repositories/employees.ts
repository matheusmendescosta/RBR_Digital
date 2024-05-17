export type IEmployees = {
  name: string;
  role: string;
  department: string;
};

export interface EmployeesRepository {
  create(data: IEmployees): Promise<IEmployees>;
  find(page: number, query?: string): Promise<IEmployees[]>;
  findById(id: string): Promise<IEmployees | null>;
  findByIdAndDelete(id: string): Promise<IEmployees | null>;
  updateById(id: string, data: IEmployees): Promise<IEmployees>;
}
