import { CardProps } from "../utils/Types";

export default function Card({image, name, description}: CardProps) {
    return <div className="rounded-xl shadow-xl w-96 min-w-[24rem] mx-5 my-2.5 text-center text-gunmetal justify-center dark:bg-gunmetal-400">
        <img className="w-11/12 jutify-center m-auto my-3 rounded-xl" src={image} />
        <hr className=" border-none h-1 bg-gunmetal-900 rounded-full dark:bg-gunmetal-600 w-5/6 m-auto " />
        <p className="text-2xl font-semibold dark:text-gunmetal-900">{name}</p>
        <p className="m-2 dark:text-gunmetal-800">{description}</p>
    </div>
}