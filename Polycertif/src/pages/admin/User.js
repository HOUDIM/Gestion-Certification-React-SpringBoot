
import SideBarAdmin from "../../components/admin/SideBarAdmin";
import TableUser from "../../components/admin/TableUser";
export default function User() {
  return (
    <div className="flex  justify-start relative  m-0">
      <SideBarAdmin />
      <div className="flex flex-col p-1 mr-10 w-full pl-32 ml-10">
        <TableUser />
      </div>
    </div>
  );
}
