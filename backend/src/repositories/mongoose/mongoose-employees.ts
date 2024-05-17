import { employee } from "@/models/employees.model";
import { EmployeesRepository, IEmployees } from "../employees";

export class MongooseEmployeesRepository implements EmployeesRepository {
  async updateById(id: string, data: Partial<IEmployees>): Promise<IEmployees> {
    const updateEmployee = await employee.findByIdAndUpdate(id, data, { new: true }).exec();

    return updateEmployee as IEmployees;
  }
  async findByIdAndDelete(id: string): Promise<IEmployees | null> {
    const deleteEmployee = await employee.findByIdAndDelete(id);

    return deleteEmployee;
  }
  async findById(id: string): Promise<IEmployees | null> {
    const findEmployee = await employee.findById(id);

    return findEmployee;
  }
  async create(data: IEmployees): Promise<IEmployees> {
    const createEmployee = await employee.create(data);

    return createEmployee as IEmployees;
  }

  async find(page: number, query?: any): Promise<IEmployees[]> {
    const filter = query ? { name: new RegExp(query, "i") } : {};

    const findAllEmployees = await employee
      .find(filter)
      .limit(10)
      .skip((page - 1) * 10)
      .sort("-createdOn")
      .exec();

    return findAllEmployees;
  }
}
