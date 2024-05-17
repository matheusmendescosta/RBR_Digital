import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import EmployeeFormEdit from "./EmployeeFormEdit";

type EditEmployeePageProps = {
  employeeId: string;
};

export default function EditEmployeePage({ employeeId }: EditEmployeePageProps) {
  return (
    <Flex color="white" h="100vh">
      <Center w="200px" bg="gray.400">
        <Text>sidebar</Text>
      </Center>
      <Box flex="1">
        <Box paddingTop={40}>
          <Container maxW="60vw">
            <EmployeeFormEdit employeeId={employeeId} />
          </Container>
        </Box>
      </Box>
    </Flex>
  );
}
