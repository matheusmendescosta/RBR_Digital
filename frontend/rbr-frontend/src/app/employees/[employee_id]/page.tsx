import { EmployeePage } from "@/components/pages/employee";

const Page = ({ params }: { params: { employee_id: string } }) => {
  return <EmployeePage employeeId={params.employee_id} />;
};

export default Page;
