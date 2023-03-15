import { useState } from "react";
import { useHistory } from "react-router-dom";
import SideBarAdmin from "../../components/admin/SideBarAdmin";

export default function AddProject() {
  const history = useHistory();
  const [certif, setCertif] = useState({
    certif_title: "",
    certif_description: "",
    certif_prix: "",
    certif_image_upload: "",
  });
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setCertif((prevCerti) => ({
      ...prevCerti,
      [name]: type === "file" ? files[0].name : value,
    }));
  };
  console.log(certif)
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/v1/certif/create", {
      method: "POST",
      body: JSON.stringify(certif),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => history.go(-1));
  };
  return (
    <div className="flex justify-start relative m-0">
      <SideBarAdmin />
      <div className="flex flex-col p-2 relative mt-12 bg-gray-100 mr-10 rounded-lg  w-full pl-32 ml-10">
        <form
            onSubmit={handleSubmit}
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
                    placeholder="Title"
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
                    placeholder="Price"
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
              <div className="col-span-full">
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
          <button className="py-2 px-4 flex justify-center items-center bg-blue-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg self-end">
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
        </form>
      </div>
    </div>
  );
}
