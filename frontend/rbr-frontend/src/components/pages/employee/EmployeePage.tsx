import SidebarWithHeader from "@/components/layout/sidebar";
import { Box, Button, Card, Flex, Heading, Spacer } from "@chakra-ui/react";
import { EmployeeSection } from "./EmployeeSection";
import { RiArrowGoBackFill } from "react-icons/ri";

type EmployeePageProps = {
  employeeId: string;
};

export const EmployeePage = ({ employeeId }: EmployeePageProps) => {
  return (
    <SidebarWithHeader>
      <Card>
        <Box p={4}>
          <Heading>Employee information</Heading>
          <Flex>
            <Spacer />
            <Box>
              <Button colorScheme="blue" leftIcon={<RiArrowGoBackFill />}>
                <a href="/employees">Return to employee list</a>
              </Button>
            </Box>
          </Flex>
        </Box>
        <EmployeeSection employeeId={employeeId} />
      </Card>
    </SidebarWithHeader>
  );
};
