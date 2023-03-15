import { NavLink } from "react-router-dom";
export default function SbElementExtended(props) {
  return (
    <NavLink
    activeClassName="flex  p-2 my-6 transition-colors hover:text-white hover:bg-gray-600 duration-200  text-gray-100 rounded-lg bg-gray-600"
    className="flex items-center p-2 my-6 transition-colors hover:text-white hover:bg-gray-600 duration-200  text-gray-600 text-gray-400 rounded-lg"
      to={props.link}
    >
      {props.svg}
      <span className="mx-4 text-lg font-normal">{props.label}</span>
      <span className="flex-grow text-right"></span>
    </NavLink>
  );
}
