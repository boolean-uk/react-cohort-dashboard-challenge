import { atom } from "jotai";

let user = localStorage.getItem("user");
export let isLoggedInState;

if (user) {
  try {
    user = JSON.parse(user);
    isLoggedInState = atom(true);
  } catch (error) {
    localStorage.removeItem("user");
    isLoggedInState = atom(false);
  }
} else {
  user = {};
  isLoggedInState = atom(false);
}

export const userState = atom(user, (_get, set, newUser) => {
  set(userState, newUser);
});
