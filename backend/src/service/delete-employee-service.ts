import { EmployeesRepository, IEmployees } from "@/repositories/employees";
import { EmployeeNotFoundError } from "./@errors/employee-not-found";

interface DeleteEmployeeServiceRequest {
  id: string;
}

interface DeleteEmployeeServiceResponse {
  employee: IEmployees | null;
}

export class DeleteEmployeeService {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute({ id }: DeleteEmployeeServiceRequest): Promise<DeleteEmployeeServiceResponse> {
    const employee = await this.employeesRepository.findByIdAndDelete(id);

    if (!employee) {
      throw new EmployeeNotFoundError();
    }

    return { employee };
  }
}
