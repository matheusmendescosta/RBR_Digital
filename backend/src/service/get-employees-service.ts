import { EmployeesRepository, IEmployees } from "@/repositories/employees";

interface GetEmployeesServiceRequest {
  query?: string;
  page: number;
}

interface GetEmployeesServiceResponse {
  employees: IEmployees[];
}

export class GetEmployeesService {
  constructor(private employeesRepository: EmployeesRepository) {}

  async execute({ page, query }: GetEmployeesServiceRequest): Promise<GetEmployeesServiceResponse> {
    const employees = await this.employeesRepository.find(page, query);

    return { employees };
  }
}
