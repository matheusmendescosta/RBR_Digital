import { useState, useCallback, useEffect } from "react";
import { EmployeeDTO } from "@/dto";

export const useQuery = (employees: EmployeeDTO[]) => {
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeDTO[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filterEmployees = useCallback((employeesList: EmployeeDTO[], query: string) => {
    if (!query) {
      setFilteredEmployees(employeesList);
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filtered = employeesList.filter(
      (employee) =>
        (employee.name && employee.name.toLowerCase().includes(lowerCaseQuery)) ||
        (employee.position && employee.position.toLowerCase().includes(lowerCaseQuery))
    );
    setFilteredEmployees(filtered);
  }, []);

  useEffect(() => {
    filterEmployees(employees, searchQuery);
  }, [searchQuery, employees, filterEmployees]);

  return { filteredEmployees, searchQuery, setSearchQuery };
};
