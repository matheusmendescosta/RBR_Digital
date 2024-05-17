import { MongooseEmployeesRepository } from "@/repositories/mongoose/mongoose-employees";
import { EmployeeNotFoundError } from "@/service/@errors/employee-not-found";
import { DeleteEmployeeService } from "@/service/delete-employee-service";
import { Request, Response } from "express";
import { z } from "zod";

const routeSchema = z.object({
  id: z.string(),
});

export async function DeleteEmployees(req: Request, res: Response) {
  const { id } = routeSchema.parse(req.params);

  const getEmployeeService = new DeleteEmployeeService(new MongooseEmployeesRepository());

  try {
    const { employee } = await getEmployeeService.execute({ id });

    return res.status(200).send({ message: "employee deleted", employee });
  } catch (error) {
    if (error instanceof EmployeeNotFoundError) {
      return res.status(404).send({ message: error.message });
    }

    return res.status(500).send({ message: "Internal server error" });
  }
}
