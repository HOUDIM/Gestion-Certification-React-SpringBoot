import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import SideBarAdmin from "../../components/admin/SideBarAdmin";

export default function EditProject() {
  const { id } = useParams(); 
  const history = useHistory();
  const [certif, setCertif] = useState({
    certif_title: "",
    certif_description: "",
    certif_prix: "",
    certif_image_upload: "",
  });
  console.log(certif)
  const deleted = () => {
    fetch("http://localhost:8080/api/v1/certif/delete/" + id, { method: "delete" }).then(
      () => {
        history.go(-1);
      }
    );
  };
  const updated = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/v1/certif/update/" + id, {
      method: "put",
      body: JSON.stringify(certif),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => history.go(-1));
  };
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setCertif((prevcertif) => ({
      ...prevcertif,
      [name]: type === "file" ? files[0].name : value,
    }));
  };
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/certif/view/" + id)
      .then((res) => res.json())
      .then((data) => setCertif(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className=" flex justify-start relative  m-0">
      <SideBarAdmin />
      <div className="flex flex-col p-2 relative mt-12 bg-gray-100 mr-10 rounded-lg  w-full pl-32 ml-10">
        <form
          onSubmit={updated}
          className="container flex flex-col mx-auto p-4 space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="p-4 rounded-md shadow-sm bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full">
                <label htmlFor="firstname" className="text-sm">
                  Title
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 px-3 py-2 focus:ring-gray-600 border-coolGray-300 text-coolGray-900"
                  value={certif.certif_title}
                  name="certif_title"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Price
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 px-3 py-2 focus:ring-gray-600 border-coolGray-300 text-coolGray-900"
                  value={certif.certif_prix}
                  name="certif_prix"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Description
                </label>
                <textarea
                  id="bio"
                  placeholder="Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 px-3 py-2 focus:ring-gray-600 border-coolGray-300 text-coolGray-900"
                  value={certif.certif_description}
                  name="certif_description"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100"
                      name="certif_image_upload"
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="flex self-end">
            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg self-end"
              onClick={deleted}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Delete
            </button>
            <button
              type="submit"
              className=" ml-5 py-2 px-4 flex justify-center items-center  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg self-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
