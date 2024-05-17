"use client";

import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import EmployeeForm from "./EmployeeForm";

export const NewEmployeePage = () => {
  return (
    <Flex color="white" h="100vh">
      <Center w="200px" bg="gray.400">
        <Text>sidebar</Text>
      </Center>
      <Box flex="1">
        <Box paddingTop={40}>
          <Container maxW='60vw'>
            <EmployeeForm />
          </Container>
        </Box>
      </Box>
    </Flex>
  );
};
