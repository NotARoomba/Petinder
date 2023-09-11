import { MarkerProps } from "../utils/Types";

export default function Marker({opacity}: MarkerProps) {
    return <> <div style={{opacity, transition: 'all', transitionDuration: '150ms'}} className="z-10 w-3 h-3 rounded-full bg-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer" /></>
}