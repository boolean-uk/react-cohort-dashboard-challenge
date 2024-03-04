import { atom } from "jotai";
import { getPosts } from "../Helpers/APIManager";

export const postState = atom(async () => {
  return await getPosts();
});

export const setPostState = atom(() => {});
