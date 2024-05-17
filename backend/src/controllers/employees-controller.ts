import { MongooseEmployeesRepository } from "@/repositories/mongoose/mongoose-employees";
import { GetEmployeesService } from "@/service/get-employees-service";
import { Request, Response } from "express";
import { z } from "zod";

const searchBodySchema = z.object({
  q: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
});

export async function ListEmployees(req: Request, res: Response) {
  const { q, page } = searchBodySchema.parse(req.params);

  const getEmployeesService = new GetEmployeesService(new MongooseEmployeesRepository());

  const { employees } = await getEmployeesService.execute({ page, query: q });

  return res.status(200).json(employees);
}
