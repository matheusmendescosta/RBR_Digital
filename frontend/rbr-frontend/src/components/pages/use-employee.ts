"use client";
import { EmployeeDTO } from "@/dto";
import { useEffect, useState } from "react";

export default function useEmployee({ employeeId }: { employeeId: string }) {
  const [employee, setEmployee] = useState<EmployeeDTO>();

  useEffect(() => {
    fetch(`http://localhost:3333/api/employee/${employeeId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail");
        }
        return response.json();
      })
      .then((data) => {
        setEmployee(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeId, setEmployee]);

  return { employee };
}
