import { MongooseEmployeesRepository } from "@/repositories/mongoose/mongoose-employees";
import { EmployeeNotFoundError } from "@/service/@errors/employee-not-found";
import { UpdateEmployeeService } from "@/service/update-employee-service";
import { Request, Response } from "express";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(1, ""),
  role: z.string().min(1, ""),
  department: z.string().min(1, ""),
});

const routeSchema = z.object({
  id: z.string(),
});

export async function UpdateEmployee(req: Request, res: Response) {
  const body = bodySchema.parse(req.body);

  const updateEmployee = new UpdateEmployeeService(new MongooseEmployeesRepository());

  const { id } = routeSchema.parse(req.params);

  try {
    const { employee } = await updateEmployee.execute({
      ...body,
      id,
    });
    return res.status(201).send(employee);
  } catch (error) {
    if (error instanceof EmployeeNotFoundError) {
      return res.status(404).send({ message: error.message });
    }
    console.log("error", error)
    return res.status(500).send({ message: "Internal server error" });
  }
}
