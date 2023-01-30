import wretch from "wretch";

import { hosts } from "./hosts";

export let wretchInstance = wretch();

export const updateWretchInstance = (
  callback: (wretch: typeof wretchInstance) => typeof wretchInstance
) => {
  wretchInstance = callback(wretchInstance);
};

export const sRequests = {
  linkedin: wretchInstance.url(hosts.linkedin).content("application/x-www-form-urlencoded"),
  github: "",
  backend: wretchInstance.url(hosts.backend).url(`/api/v1`).content("application/json")
};
