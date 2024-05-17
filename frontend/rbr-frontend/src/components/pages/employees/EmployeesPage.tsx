"use client";

import SidebarWithHeader from "@/components/layout/sidebar";
import { Box, Button, Card, Flex, Heading, Spacer } from "@chakra-ui/react";
import { EmployeeTables } from "./EmployeesTable";
import { RiArrowGoBackFill } from "react-icons/ri";

export const EmployeesPage = () => {
  return (
    <SidebarWithHeader>
      <Card>
        <Box p={4}>
          <Heading>List of employees</Heading>
        </Box>
        <EmployeeTables />
      </Card>
    </SidebarWithHeader>
  );
};
