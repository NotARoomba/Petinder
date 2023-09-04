import { CardProps } from "../utils/Types";

export default function Card({image, name, description}: CardProps) {
    return <div className="rounded-xl shadow-xl w-96 min-w-[24rem] mx-5 text-center text-gunmetal justify-center">
        <img className="w-96 jutify-center m-2" src={image} />
        <hr className=" border-none h-1 bg-gunmetal-900 w-5/6 m-auto " />
        <p className="text-2xl font-semibold">{name}</p>
        <p className="m-2">{description}</p>
    </div>
}