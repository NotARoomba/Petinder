import { CardProps } from "../utils/Types";

export default function Card({ image, name, description }: CardProps) {
  return (
    <div className=" inline-block rounded-xl shadow-xl min-w-[16rem] max-w-[24rem] align-top py-px mb-16 h-fit mx-5 text-center text-gunmetal justify-center dark:bg-gunmetal-400">
      <img
        className="w-11/12 jutify-center m-auto my-3 rounded-xl"
        src={image}
      />
      <hr className=" border-none h-1 bg-gunmetal-900 rounded-full dark:bg-gunmetal-600 w-5/6 m-auto " />
      <p className="text-2xl font-semibold dark:text-gunmetal-900">{name}</p>
      <p className="m-2 text-lg dark:text-gunmetal-800 pb-2">{description}</p>
    </div>
  );
}
