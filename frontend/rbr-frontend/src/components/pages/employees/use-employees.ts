import { useCallback, useEffect, useState } from "react";
import { EmployeeDTO } from "@/dto";

export default function useEmployees() {
  const [employees, setEmployees] = useState<EmployeeDTO[]>([]);

  const loadEmployees = useCallback(() => {
    fetch("http://localhost:3333/api/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  return { employees, setEmployees };
}
