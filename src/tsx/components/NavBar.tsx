import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import { ThemeState } from "../utils/Types";

export default function NavBar() {
  const [theme, setTheme] = useState<ThemeState | string>();
  useEffect(() => {
    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark')
    } else {
        setTheme('light');
    }
  }, [])
  const changeTheme = () => {
    // toggle icons inside button

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            setTheme('dark')
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            setTheme('light');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            setTheme('light')
            localStorage.setItem('color-theme', 'dark');
        }
    }
  }
  return (
    <div className="flex w-screen shadow-lg dark:bg-gunmetal-300">
      <Link
        to="/"
        className="group justify-left flex w-1/3 align-middle transition"
      >
        <img src="/img/logo.png" className="h-14 m-2 rounded-xl" />
        <div className="flex flex-col justify-center align-middle max-w-fit">
          <p className="text-left m-4 mb-0 text-4xl font-bold bg-gunmetal dark:bg-gradient-to-r from-hot_pink to-baker-miller_pink bg-clip-text text-transparent">
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
      <div className="flex w-1/3 justify-end items-center">
        <button type="button" className="aspect-square h-16 text-gunmetal-500 dark:text-gunmetal-700 hover:bg-gunmetal-900 dark:hover:bg-gunmetal-300  rounded-lg text-sm p-2.5 justify-center align-middle mr-2" onClick={changeTheme}>
          {theme === 'light'?<svg className="w-max h-max justify-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
         : <svg className="w-max h-max justify-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>}
      </button>
      </div>
    </div>
  );
}
