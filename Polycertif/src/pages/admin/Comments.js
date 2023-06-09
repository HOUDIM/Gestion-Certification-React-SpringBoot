import SideBarAdmin from "../../components/admin/SideBarAdmin";
import TableComments from "../../components/admin/TableComments";

export default function Comments() {
  return (
    <div className="flex  justify-start relative  m-0">
      <SideBarAdmin />
      <div className="flex flex-col mr-10 p-1 relative  w-full pl-32 ml-10">
        <TableComments />
      </div>
    </div>
  );
}
