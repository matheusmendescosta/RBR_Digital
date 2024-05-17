import { Box, Button, Flex, Spacer, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import useEmployees from "./use-employees";

export const EmployeeTables = () => {
  const { employees } = useEmployees();

  console.log(employees);

  return (
    <>
      <Flex>
        <Spacer />
        <Box p="4">
          <Button colorScheme="teal" leftIcon={<IoMdAdd />}>
            <a href="/employees/new">Add New Employee</a>
          </Button>
        </Box>
      </Flex>
      <TableContainer>
        <Table>
          <TableCaption>Table information employees</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Role</Th>
              <Th>Department</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody color="black">
            {employees.map((employee) => (
              <Tr key={employee._id}>
                <Td>{employee.name}</Td>
                <Td>{employee.role}</Td>
                <Td>{employee.department}</Td>
                <Td>
                  <Box>
                    <Button colorScheme="red" size="xs">
                      Remove
                    </Button>
                    <Button colorScheme="green" size="xs">
                      <a href={`/employees/${employee._id}`}>update</a>
                    </Button>
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
