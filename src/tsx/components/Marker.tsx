import { MarkerProps } from "../utils/Types";

export default function Marker({opacity}: MarkerProps) {
    return <> <img style={{opacity, transition: 'all', transitionDuration: '150ms'}} className="z-10 w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer filter-[invert(64%) sepia(22%) saturate(4374%) hue-rotate(290deg) brightness(103%) contrast(101%)]" src="/img/marker.svg" /></>
}