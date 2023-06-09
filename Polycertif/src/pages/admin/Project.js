
import Card from "../../components/admin/Card";
import SideBarAdmin from "../../components/admin/SideBarAdmin";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Project() {
  const [allCertif, setAllCertif] = useState([]);
 useEffect(() => {
    fetch("http://localhost:8080/api/v1/certif/view")
      .then((res) => res.json())
     .then((data) => {
       setAllCertif(data)
     });

  }, []);
  const cards = allCertif.map((data) => <Card data={data} key={data.certif_id} />);
  return (
    <div className="flex  justify-start relative  m-0">
      <SideBarAdmin />
      <div className="flex flex-col items-center p-1 relative w-full pl-20">
        <div className=" flex justify-end w-full">
          <Link to="/back/Certifivations/add">
            <button
              type="button"
              className="py-2 px-4 flex justify-center mr-10 mt-10 items-center bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg self-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm::grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-4 self-center">
          {cards}
        </div>
      </div>
    </div>
  );
}
