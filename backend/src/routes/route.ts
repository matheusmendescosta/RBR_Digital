import { CreateEmployee } from "@/controllers/create-employee-controller";
import { DeleteEmployees } from "@/controllers/delete-employee-controller";
import { ListEmployees } from "@/controllers/employees-controller";
import { GetEmployees } from "@/controllers/get-employee-controller";
import { UpdateEmployee } from "@/controllers/update-employee-controller";
import { Router } from "express";

const router = Router();

router.get("/employees", (req, res) => ListEmployees(req, res));
router.get("/employee/:id", (req, res) => GetEmployees(req, res));
router.delete("/employee/:id", (req, res) => DeleteEmployees(req, res));
router.put("/employee/:id", (req, res) => UpdateEmployee(req, res));
router.post("/employee", (req, res) => CreateEmployee(req, res));

export default router;
