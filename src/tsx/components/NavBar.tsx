import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div className="flex w-screen mb-12 shadow-lg">
      <Link
        to="/"
        className="group justify-left flex w-1/3 align-middle transition"
      >
        <img src="/img/logo.png" className="h-14 m-2 rounded-xl" />
        <div className="flex flex-col justify-center align-middle max-w-fit">
          <p className="text-left m-4 mb-0 text-4xl font-bold bg-gunmetal bg-clip-text text-transparent">
            Petinder
          </p>
          <hr className="bg-gradient-to-r from-hot_pink to-baker-miller_pink max-w-0 group-hover:max-w-full transition-all duration-500 h-1 border-none rounded-xl mb-4" />
        </div>
      </Link>
      <div className="justify-left flex w-1/3 text-lg text-gunmetal">
        <NavButton route="/adopta" text="Adopta" image="/img/dog.png" />
        <NavButton route="/centros" text="Centros" image="/img/dog-house.png" />
        <NavButton
          route="/adoptamos"
          text="Adoptamos"
          image="/img/pawprint.png"
        />
      </div>
      <div className="w-1/3">
        <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
          <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
          <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      </button>
      </div>
    </div>
  );
}
