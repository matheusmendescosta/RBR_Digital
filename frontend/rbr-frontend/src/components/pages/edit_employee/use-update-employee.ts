import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useEmployee from "../use-employee";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

type FormProps = {
  name?: string;
  role?: string;
  department?: string;
};

export const useUpdateEmployee = ({ employeeId }: { employeeId: string }) => {
  const router = useRouter();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { employee } = useEmployee({ employeeId });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    values: {
      name: employee?.name,
      role: employee?.role,
      department: employee?.department,
    },
  });

  console.log("employee", employee);

  const submitHandler = (data: FormProps) => {
    setIsSubmitting(true);

    fetch(`http://localhost:3333/api/employee/${employeeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        role: data.role,
        department: data.department,
      }),
    })
      .then((response) => {
        if (response.ok) {
          router.push("/employees");
          toast({
            title: "Employee updated.",
            description: "Employee updated successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          setIsSubmitting(false);
        }
        response.json;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    register,
    handleSubmit: handleSubmit(submitHandler),
    isSubmitting,
    // company,
    // setCompany,
    // loaded,
    errors,
  };
};
