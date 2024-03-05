import { atom } from "jotai";
import { getPosts } from "../Helpers/APIManager";

const initialPosts = getPosts();

export const postState = atom(initialPosts, (_get, set, newPosts) => {
  set(postState, newPosts);
});
