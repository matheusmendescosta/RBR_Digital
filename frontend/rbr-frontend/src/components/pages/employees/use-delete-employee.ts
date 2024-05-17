import { EmployeeDTO } from "@/dto";
import { useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type useDeleteEmployeeProps = {
  employeeRemove: string;
  onClose: () => void;
  setEmployees: Dispatch<SetStateAction<EmployeeDTO[]>>;
};

export const useDeleteEmployee = ({ employeeRemove, onClose, setEmployees }: useDeleteEmployeeProps) => {
  const toast = useToast();
  const submitDeleteData = () => {
    fetch(`http://localhost:3333/api/employee/${employeeRemove}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees((oldEmployees) => {
          return oldEmployees.filter((oldEmployee) => oldEmployee._id !== data.employee._id);
        });
        toast({
          title: "Employee removed.",
          description: "Employee removed successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { submitDeleteData };
};
