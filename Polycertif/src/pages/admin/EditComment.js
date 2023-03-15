import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import SideBarAdmin from "../../components/admin/SideBarAdmin";
export default function EditComment() {
  const { id } = useParams();
  const history = useHistory();
  const [comment, setComment] = useState({
    comproject_id: "",
    comperson_id: "",
    comment_txt: "",
    reply: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/v1/comment/update/" + id, {
      method: "PUT",
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => history.go(-1));
  };
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/comment/view/" + id)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  return (
    <div className="flex  justify-start relative  m-0">
      <SideBarAdmin />
      <div className="flex flex-col p-1 relative w-full pl-32 ml-10">
        <form className="container pr-9 mt-10  " onSubmit={handleSubmit}>

          <div className="space-y-6 bg-gray-100 rounded-lg">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Comment</h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div className=" relative ">
                    <label className="text-gray-700" htmlFor="name">
                      <textarea
                        className="flex-1 appearance-none border border-gray-50 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        id="comment"
                        placeholder="Enter your comment"
                        name="comment_txt"
                        rows="5"
                        cols="40"
                        value={comment.comment_txt}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                className="py-2 px-4  bg-blue-800 hover:bg-blue-900 focus:ring-blue-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
