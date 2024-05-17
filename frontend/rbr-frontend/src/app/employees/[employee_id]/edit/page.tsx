import EditEmployeePage from "@/components/pages/edit_employee/EditEmployeePage";

const Page = ({ params }: { params: { employee_id: string } }) => {
  return <EditEmployeePage employeeId={params.employee_id} />;
};

export default Page;
