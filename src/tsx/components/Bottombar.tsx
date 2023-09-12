import { Link } from "react-router-dom";

export default function BottomBar() {
    return <div className="shadow-inner dark:bg-gunmetal-200 dark:text-gunmetal-900 h-32 flex justify-around pt-2 text-center text-md xl:text-xl">
    <div className="flex flex-col">
      <p className="font-bold ">Contactarnos</p>
      <Link className="underline" to='mailto:petinder.col@gmail.com'>Email</Link>
      <Link to='tel:+573012668699' className="underline">+57 301-266-8699</Link>
    </div>
    <div>
      <p className="font-bold ">Redes Social</p>
      <Link className="underline" to='https://www.instagram.com/petinder.col/'>Instagram</Link>
    </div>
    <div className="flex flex-col">
      <p className="font-bold">Paginas</p>
      <Link to='/adopta' className="underline">Adopta</Link>
      <Link to='/centros' className="underline">Centros</Link>
      <Link to='/adoptamos' className="underline">Adoptamos</Link>
      
    </div>
</div>
}