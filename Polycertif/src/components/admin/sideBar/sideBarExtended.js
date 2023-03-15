import SbElementExtended from "./sbElementExtended";
import LogoExtended from "./logoExtended";
export default function SideBarExtended(props) {
  const data = [
    {
      link: "/back/Users",
      svg: (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="m-auto"
          viewBox="0 0 2048 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
        </svg>
      ),
      label: "Users",
    },
    {
      link: "/back/Comments",
      svg: (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="m-auto"
          viewBox="0 0 2048 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"></path>
        </svg>
      ),
      label: "Comment",
    },
    {
      link: "/back/Certifivations",
      svg: (
        <svg
          width="20"
          height="20"
          className="m-auto"
          fill="currentColor"
          viewBox="0 0 2048 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
        </svg>
      ),
      label: "Certification",
    },
  ];

  const elements = data.map((element) => (
    <SbElementExtended
      link={element.link}
      svg={element.svg}
      label={element.label}
      select={element.select}
      key={element.label}
    />
  ));
  return (
    <div className="flex flex-col bg-gray-800 h-fit w-52 relative">
      <div className="h-screen bg-gray-800  fixed left-0 top-0 bottom-0 shadow-md"  >
        <LogoExtended
          image="data:image/png;base64,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"
          name="Dimassi DEV"
        />
        <nav className="mt-10 px-5 text-white">{elements}</nav>
      </div>
    </div>
  );
}
