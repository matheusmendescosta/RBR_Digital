import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import useEmployees from "./use-employees";
import { useState } from "react";
import { useDeleteEmployee } from "./use-delete-employee";
import { useQuery } from "./use-query";

export const EmployeeTables = () => {
  const [employeeRemove, setEmployeeRemove] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { employees, setEmployees } = useEmployees();
  const { submitDeleteData } = useDeleteEmployee({ employeeRemove, onClose, setEmployees });
  const { filteredEmployees, searchQuery, setSearchQuery } = useQuery(employees);

  const handleRemoveClick = (id: string) => {
    setEmployeeRemove(id);
    onOpen();
  };

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
      <Box p={4}>
        <Input placeholder="Search employee" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Box>
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
            {filteredEmployees.map((employee) => (
              <Tr key={employee._id}>
                <Td>{employee.name}</Td>
                <Td>{employee.role}</Td>
                <Td>{employee.department}</Td>
                <Td>
                  <Flex>
                    <ButtonGroup gap="0.1">
                      <Button
                        colorScheme="red"
                        size="xs"
                        onClick={() => {
                          handleRemoveClick(employee._id);
                        }}
                      >
                        Remove
                      </Button>
                      <Button colorScheme="blue" size="xs">
                        <a href={`/employees/${employee._id}`}>view</a>
                      </Button>
                      <Button colorScheme="green" size="xs">
                        <a href={`/employees/${employee._id}/edit`}>update</a>
                      </Button>
                    </ButtonGroup>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>This action removes the employee</ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" onClick={submitDeleteData}>
              Remove
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
