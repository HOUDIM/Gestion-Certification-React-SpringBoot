import { useState } from "react";
import { useHistory } from "react-router-dom";
import ClosedComment from "./ClosedComment";
import OpenComment from "./OpenComment";
import H4 from '@material-tailwind/react/Heading4';
import SimpleComment from "./SimpleComment";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Comment() {
  const { id } = useParams();
  const history = useHistory();
  const [comment, setComment] = useState({
    id_certif: id,
    id_person: "123",
    comment_txt: "",
    reply: false,
  });
  const [ALLcomments, setComments] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/comment/view")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const commentsEl = ALLcomments.map((commentEl) => {
    console.log(commentEl)
    return commentEl.id_certif == id ? (<SimpleComment key={commentEl.id_comment} comment={commentEl}/>):(<p></p>)
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    fetch("http://localhost:8080/api/v1/comment/create", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {comment.comment_txt=""});
  };
  return (
    <section>
      <div className="antialiased container px-5 py-12 mx-auto lg:w-10/12 ">
        <div className="w-full mb-32">
        <H4 color="gray">Commentaires</H4>
        </div>

        <div className="space-y-4 mt-10">
          {commentsEl}
          <form className=" rounded-lg  pt-2" onSubmit={handleSubmit}>

              <h2 className="pt-3 pb-2 text-gray-800 text-lg tracking-widest font-medium title-font ">
                Ajouter un commentaire
              </h2>

            <div className="mb-2 mt-2">
              <textarea
                className="bg-white-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="comment_txt"
                placeholder="Ecrire un commentaire"
                required
                value={comment.comment_txt}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-full flex justify-end mb-11">
              <input
                type="submit"
                className="bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-medium py-1 px-4 rounded-lg tracking-wide mb-5 self-end"
                value="Publier"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
