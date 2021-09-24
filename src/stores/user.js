import { writable } from "svelte/store";

export const redirectPath = writable(localStorage.getItem("redirectPath") || "");
export const userRole = writable(localStorage.getItem("userRole") || "");
export const userImpersonated = writable(localStorage.getItem("userImpersonated") || "");
export const userLoggedIn = writable(
  localStorage.getItem("userLoggedIn") || ""
);
export const showMainErrorDialog = writable(false);
export const userName = writable(
  localStorage.getItem("userName") || ""
);
export const validatedUserName = writable(
  localStorage.getItem("validatedUserName") || ""
);
export const authToken = writable(localStorage.getItem("authToken") || "");
export const userHasClosedWelcome = writable(
  localStorage.getItem("userHasClosedWelcome") || ""
);

redirectPath.subscribe((val) => localStorage.setItem("redirectPath", val));
userRole.subscribe((val) => localStorage.setItem("userRole", val));
userImpersonated.subscribe((val) => localStorage.setItem("userImpersonated", val));
userLoggedIn.subscribe((val) => localStorage.setItem("userLoggedIn", val));
userName.subscribe((val) => localStorage.setItem("userName", val));
validatedUserName.subscribe((val) => localStorage.setItem("validatedUserName", val));
authToken.subscribe((val) => localStorage.setItem("authToken", val));
userHasClosedWelcome.subscribe((val) =>
  localStorage.setItem("userHasClosedWelcome", val)
);
