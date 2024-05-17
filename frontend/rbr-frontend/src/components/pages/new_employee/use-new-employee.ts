import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

type FormProps = {
  name: string;
  role: string;
  department: string;
};

export const useNewEmployee = () => {
  const toast = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const handlerSubmitEmployee = (data: FormProps) => {
    setIsSubmitting(true);

    fetch("http://localhost:3333/api/employee", {
      method: "POST",
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
            title: "Employee created.",
            description: "Employee created successfully",
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
  return { isSubmitting, register, handleSubmit: handleSubmit(handlerSubmitEmployee), errors };
};
