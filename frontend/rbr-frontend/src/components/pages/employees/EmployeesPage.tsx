"use client";

import { Box, Center, Flex, Container, Text } from "@chakra-ui/react";
import { EmployeeTables } from "./EmployeesTable";

export const EmployeesPage = () => {
  return (
    <Flex color="white" h="100vh">
      <Center w="200px" bg="gray.400">
        <Text>sidebar</Text>
      </Center>
      <Box flex="1">
        <Box paddingTop={40}>
          <EmployeeTables />
        </Box>
      </Box>
    </Flex>
  );
};
