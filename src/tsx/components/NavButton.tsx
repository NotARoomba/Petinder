import { Link, useLocation } from "react-router-dom";
import { NavButtonProps } from "../utils/Types";

export default function NavButton({ route, text, image }: NavButtonProps) {
  const location = useLocation();
  return (
    <Link
      to={route}
      className={
        "group text-center flex  mx-auto xl:m-4 my-4 w-48 min-w-max rounded-full py-2 justify-center hover:bg-hot_pink-700 dark:text-gunmetal-900 dark:hover:bg-hot_pink-700 dark:hover:text-gunmetal hover:shadow-md transition-all duration-300 font-semibold " +
        (location.pathname == route
          ? "shadow-xl bg-gradient-to-r from-hot_pink-400 to-hot_pink-600 dark:text-gunmetal-400"
          : "bg-neutral-200 dark:bg-gunmetal-500")
      }
    >
      <img
        className="h-8 mr-2 dark:invert contrast-200 dark:filter pl-5"
        src={image}
      ></img>
      <p className="align-middle h-full pr-5">{text}</p>
    </Link>
  );
}
