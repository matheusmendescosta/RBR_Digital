import SidebarWithHeader from "@/components/layout/sidebar";
import { Box, Card, Heading } from "@chakra-ui/react";
import EmployeeFormEdit from "./EmployeeFormEdit";

type EditEmployeePageProps = {
  employeeId: string;
};

export default function EditEmployeePage({ employeeId }: EditEmployeePageProps) {
  return (
    <SidebarWithHeader>
      <Card>
        <Box p={4}>
          <Heading>Update employee</Heading>
        </Box>
        <EmployeeFormEdit employeeId={employeeId} />
      </Card>
    </SidebarWithHeader>
  );
}
