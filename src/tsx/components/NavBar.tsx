import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import { ThemeState } from "../utils/Types";
import ThemeButton from "./ThemeButton";

export default function NavBar() {
  const [theme, setTheme] = useState<ThemeState>(ThemeState.LIGHT);
  const [menu, setM] = useState(false);
  useEffect(() => {
    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme(ThemeState.DARK)
    } else {
        setTheme(ThemeState.LIGHT);
    }
  }, [])
  const setMenu = (value: boolean) => {
    setM(value);
    document.body.style.overflowY = value ? 'hidden' : 'auto'
  }
  const changeTheme = () => {
    // toggle icons inside button

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            setTheme(ThemeState.DARK)
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme(ThemeState.LIGHT);
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            setTheme(ThemeState.DARK);
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            setTheme(ThemeState.LIGHT);
            localStorage.setItem('color-theme', 'dark');
        }
    }
  }
  return (
    <div className="flex w-screen shadow-lg h-20 dark:bg-gunmetal-300">
      <Link
        to="/"
        className="group justify-left w-1/2 flex align-middle transition"
      >
        <img src="/img/logo.png" className="h-14 m-2 rounded-xl" />
        <div className="flex my-auto  flex-col justify-center align-middle max-w-fit">
          <p className="text-left m-4 mb-0 text-4xl font-bold bg-gunmetal dark:bg-gradient-to-r from-hot_pink to-baker-miller_pink bg-clip-text text-transparent">
            Petinder
          </p>
          <hr className="bg-gradient-to-r from-hot_pink to-baker-miller_pink dark:from-gunmetal-300 dark:to-hot_pink max-w-0 group-hover:max-w-full transition-all duration-500 h-1 border-none rounded-xl mb-4" />
        </div>
      </Link>
      <div className="justify-left hidden xl:flex text-lg text-gunmetal">
        <NavButton route="/adopta" text="Adopta" image="/img/dog.png" />
        <NavButton route="/centros" text="Centros" image="/img/dog-house.png" />
        <NavButton
          route="/adoptamos"
          text="Adoptamos"
          image="/img/pawprint.png"
        />
      </div>
      <div className="flex w-1/2 justify-end items-center">
        <ThemeButton theme={theme} changeTheme={changeTheme}  />
      <div className="flex xl:hidden group items-center flex-col w-16 aspect-square py-3 hover:bg-gunmetal-900 dark:hover:bg-gunmetal-500 rounded-lg mr-2 p-1 my-auto align-middle cursor-pointer transition-all " onClick={() => setMenu(!menu)}>
        <span className={"bg-gunmetal dark:bg-gunmetal-900 w-10 block h-1 rounded my-auto duration-300" + (menu ? " -rotate-45 translate-y-[13px]" : " rotate-0")}></span>
        <span className={" w-10 block h-1 rounded my-auto duration-300" + (menu?" bg-transparent " : " bg-gunmetal dark:bg-gunmetal-900")}></span>
        <span className={"bg-gunmetal dark:bg-gunmetal-900 w-10 block h-1 rounded my-auto duration-300" + (menu ? " rotate-45 -translate-y-[13px]" : " rotate-0")}></span>
      </div>
      </div>
      <div onClick={() => setMenu(false)} className={" bg-white/80 dark:bg-gunmetal-500/80 w-screen absolute h-fit top-20 z-10 justify-center transition duration-300 flex flex-wrap" + (menu?' animate-show' : ' animate-hide hidden')}>
        <NavButton route="/adopta" text="Adopta" image="/img/dog.png" />
        <NavButton route="/centros" text="Centros" image="/img/dog-house.png" />
        <NavButton
          route="/adoptamos"
          text="Adoptamos"
          image="/img/pawprint.png"
        />
        {/* <ThemeButton theme={theme} changeTheme={changeTheme}  /> */}
        </div>
    </div>
  );
}
