import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function NavBar() {
    return <div className="flex w-screen mb-12">
        <Link to='/' className="group justify-left flex w-1/3 align-middle transition">
            <img src='/img/logo.png' className="h-14 m-2 rounded-xl" />
            <div className="flex flex-col justify-center align-middle max-w-fit">
                <p className="text-left m-4 mb-0 text-4xl font-bold bg-gradient-to-r from-gunmetal to-amaranth_pink bg-clip-text text-transparent">Petinder</p>
                <hr className="bg-gradient-to-r from-french_mauve to-amaranth_pink max-w-0 group-hover:max-w-full transition-all duration-500 h-1 border-none rounded-xl mb-4" />
            </div>
        </Link>
        <div className="justify-left flex w-2/3 text-lg text-gunmetal">
            <NavButton route="/adopta" text="Adopta" image="/img/dog.png" />
            <NavButton route="/centros" text="Centros" image="/img/dog-house.png" />
            <NavButton route="/adoptamos" text="Adoptamos" image="/img/pawprint.png" />
        </div>
    </div>
}