import { EmployeesRepository, IEmployees } from "@/repositories/employees";
import { EmployeeNotFoundError } from "./@errors/employee-not-found";

interface UpdateEmployeeServiceRequest {
  id: string;
  name: string;
  role: string;
  department: string;
}

interface UpdateEmployeeServiceResponse {
  employee: IEmployees;
}

export class UpdateEmployeeService {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute({ id, name, role, department }: UpdateEmployeeServiceRequest): Promise<UpdateEmployeeServiceResponse> {
    const employee = await this.employeesRepository.findById(id);

    if (!employee) throw new EmployeeNotFoundError();

    const updateEmployee = await this.employeesRepository.updateById(id, {
      name,
      role,
      department,
    });

    return { employee: updateEmployee };
  }
}
