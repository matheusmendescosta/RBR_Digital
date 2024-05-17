import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Spacer } from "@chakra-ui/react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNewEmployee } from "./use-new-employee";

export default function EmployeeForm() {
  const { isSubmitting, errors, handleSubmit, register } = useNewEmployee();

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
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.role}>
          <FormLabel textColor="black">Role</FormLabel>
          <Input
            textColor="black"
            placeholder="Role"
            {...register("role", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>{errors.role && errors.role.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.department}>
          <FormLabel textColor="black">Department</FormLabel>
          <Input
            textColor="black"
            placeholder="Department"
            {...register("department", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>{errors.department && errors.department.message}</FormErrorMessage>
        </FormControl>
        <Box paddingTop="20px">
          <Button colorScheme="green" isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
