import { Link } from "react-router-dom";

export default function Card({ data }) {
  // const tags = data.tags.map((tag, index) => (
  //   <div
  //     className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl"
  //     key={index}
  //   >
  //     {tag}
  //   </div>
  // ));
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-4">
      <Link to={`/back/Certifivations/${data.certif_id}`} className="w-full block h-full">
        <img
          alt="blog"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1wU3RtIX5uW-GyfJq1Hjj84zt_SjoYNGsg&usqp=CAU"
          className="max-h-40 w-full object-cover"
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {data.certif_title}
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            {data.certif_time}
          </p>
        </div>
      </Link>
    </div>
  );
}
