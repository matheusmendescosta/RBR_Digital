import { EmployeesRepository, IEmployees } from "@/repositories/employees";
import { EmployeeNotFoundError } from "./@errors/employee-not-found";

interface GetEmployeeServiceRequest {
  id: string;
}

interface GetEmployeeServiceResponse {
  employee: IEmployees | null;
}

export class GetEmployeeService {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute({ id }: GetEmployeeServiceRequest): Promise<GetEmployeeServiceResponse> {
    const employee = await this.employeesRepository.findById(id);

    if (!employee) {
      throw new EmployeeNotFoundError();
    }

    return { employee };
  }
}
