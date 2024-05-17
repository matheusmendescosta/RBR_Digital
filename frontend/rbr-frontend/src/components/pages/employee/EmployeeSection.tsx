"use client";

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import useEmployee from "../use-employee";

export const EmployeeSection = ({ employeeId }: { employeeId: string }) => {
  const { employee } = useEmployee({ employeeId });

  return (
    <Box p={8}>
      <Grid>
        <GridItem colSpan={3}>
          <Text>Name</Text>
          <Text>{employee?.name}</Text>
        </GridItem>
        <GridItem colStart={6}>
          <Text>Role</Text>
          <Text>{employee?.role}</Text>
        </GridItem>
        <GridItem colStart={12}>
          <Text>Role</Text>
          <Text>{employee?.role}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
