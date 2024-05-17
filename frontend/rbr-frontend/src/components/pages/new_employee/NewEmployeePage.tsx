"use client";

import SidebarWithHeader from "@/components/layout/sidebar";
import { Box, Card, Heading } from "@chakra-ui/react";
import EmployeeForm from "./EmployeeForm";

export const NewEmployeePage = () => {
  return (
    <SidebarWithHeader>
      <Card>
        <Box p={4}>
          <Heading>Create employee</Heading>
        </Box>
        <EmployeeForm />
      </Card>
    </SidebarWithHeader>
  );
};
