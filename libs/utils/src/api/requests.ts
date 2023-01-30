import { sRequests } from "./sRequests";
import { endpoints } from "./endpoints";

export const requests = {
  linkedin: {
    authorization: () =>
      sRequests.linkedin
        .url(endpoints.linkedin.authorizationCode)
        .post(endpoints.linkedin.authorizationCode.form),
    accessTokenByCode(code: string, linkedinClientSecret: string) {
      const url = endpoints.linkedin.accessTokenByCode(code, linkedinClientSecret);
      return sRequests.linkedin.url(url).post(url.form);
    }
  },
  backend: {
    oauth: {
      linkedin(code: string, state: string) {
        const url = endpoints.backend.oauth.linkedin(code, state);
        return sRequests.backend.url(url).post(url.params);
      }
    }
  }
};
