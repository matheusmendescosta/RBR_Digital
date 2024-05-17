import { Box, Button, Flex, FormControl, FormLabel, Input, Spacer } from "@chakra-ui/react";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function EmployeeForm() {
  return (
    <>
      <Flex>
        <Spacer />
        <Box p="4">
          <Button colorScheme="blue" leftIcon={<RiArrowGoBackFill />}>
            <a href="/employees">Return to employee list</a>
          </Button>
        </Box>
      </Flex>
      <FormControl isRequired>
        <FormLabel textColor="black">Name</FormLabel>
        <Input placeholder="First name" />
        <FormLabel textColor="black">Role</FormLabel>
        <Input placeholder="First name" />
        <FormLabel textColor="black">Department</FormLabel>
        <Input placeholder="First name" />
        <Box paddingTop="20px">
          <Button colorScheme="green">Submit</Button>
        </Box>
      </FormControl>
    </>
  );
}
