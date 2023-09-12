import { Link } from "react-router-dom";
import { MarkerInfoProps } from "../utils/Types";

export default function MarkerInfo({ center }: MarkerInfoProps) {
  return (
    <div className=" bg-gunmetal absolute bottom-8 -left-28 min-w-[240px] z-50 p-2 rounded-xl text-center">
      <img className=" w-56 rounded max-w-[230px]" src={center.image} />
      <div className="font-bold text-lg">{center.name}</div>
      <Link
        className="underline text-lg"
        to={
          center.website[0] === "N"
            ? `tel:${center.website.split("Numero: ").pop()}`
            : center.website
        }
      >
        Contacta
      </Link>
    </div>
  );
}
