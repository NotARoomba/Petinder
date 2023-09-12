import { MarkerProps } from "../utils/Types";
import MarkerInfo from "./MarkerInfo";

// Cl. 109 #36-2 a 36-176
export default function Marker({ opacity, center, show }: MarkerProps) {
  return (
    <>
      <img
        style={{ opacity, transition: "all", transitionDuration: "150ms" }}
        className="z-10 w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  hover:cursor-pointer marker"
        src="/img/marker.png"
      />
      {show && <MarkerInfo center={center} />}
    </>
  );
}
