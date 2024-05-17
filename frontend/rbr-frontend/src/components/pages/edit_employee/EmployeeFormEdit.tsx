"use client";

import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Spacer, useToast } from "@chakra-ui/react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useUpdateEmployee } from "./use-update-employee";

type EmployeeFormEditProps = {
  employeeId: string;
};

export default function EmployeeFormEdit({ employeeId }: EmployeeFormEditProps) {
  const { register, handleSubmit, errors, isSubmitting } = useUpdateEmployee({ employeeId });

  return (
    <Box p={8}>
      <Flex>
        <Spacer />
        <Box p="4">
          <Button colorScheme="blue" leftIcon={<RiArrowGoBackFill />}>
            <a href="/employees">Return to employee list</a>
          </Button>
        </Box>
      </Flex>

      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel textColor="black">Name</FormLabel>
          <Input
            textColor="black"
            placeholder="Name"
            {...register("name", {
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel textColor="black">Role</FormLabel>
          <Input
            textColor="black"
            placeholder="Role"
            {...register("role", {
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>{errors.role && errors.role.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel textColor="black">Department</FormLabel>
          <Input textColor="black" placeholder="Department" {...register("department", {})} />
          <FormErrorMessage>{errors.department && errors.department.message}</FormErrorMessage>
        </FormControl>
        <Box paddingTop="20px">
          <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
