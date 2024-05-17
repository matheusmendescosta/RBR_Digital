import { EmployeesRepository, IEmployees } from "@/repositories/employees";

interface CreateEmployeesServiceRequest {
  name: string;
  role: string;
  department: string;
}

interface CreateEmployeesServiceResponse {
  employee: IEmployees;
}

export class CreateEmployeesService {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute({ name, role, department }: CreateEmployeesServiceRequest): Promise<CreateEmployeesServiceResponse> {
    const employee = await this.employeesRepository.create({ name, role, department });

    return { employee };
  }
}
