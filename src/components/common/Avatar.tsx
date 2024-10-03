import { AvatarProps } from "./types";

export default function Avatar({ imgSrc }: AvatarProps) {
  return (
    <img
      src={imgSrc}
      className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-semibold"
    ></img>
  );
}
