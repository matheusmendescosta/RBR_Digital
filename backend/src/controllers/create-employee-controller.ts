import { MongooseEmployeesRepository } from "@/repositories/mongoose/mongoose-employees";
import { CreateEmployeesService } from "@/service/create-employees-service";
import { Request, Response } from "express";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(1, "require"),
  role: z.string().min(1, "require"),
  department: z.string().min(1, "require"),
});

export async function CreateEmployee(req: Request, res: Response) {
  const body = bodySchema.parse(req.body);

  const createEmployeeService = new CreateEmployeesService(new MongooseEmployeesRepository());

  try {
    const { employee } = await createEmployeeService.execute(body);

    return res.status(201).json({ employee });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
