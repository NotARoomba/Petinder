import { Link, useLocation } from "react-router-dom";
import { NavButtonProps } from "../utils/Types";

export default function NavButton({ route, text, image }: NavButtonProps) {
  const location = useLocation();
  return (
    <Link
      to={route}
      className={
        "text-center flex m-4 w-48 min-w-fit rounded-full py-2 px-5 justify-center hover:bg-hot_pink-700 hover:shadow-md transition-all duration-300 font-semibold " +
        (location.pathname == route
          ? "shadow-xl bg-gradient-to-r from-hot_pink-400 to-hot_pink-600"
          : "bg-neutral-200")
      }
    >
      <img className="h-8 mr-2" src={image}></img>
      <p className="align-middle h-full">{text}</p>
    </Link>
  );
}
