import { proxyUrl } from "../proxyUrl";
import { linkedinClientId } from "./env";
import { hosts } from "./hosts";
import { redirectUrls } from "./redirectUrls";

export const endpoints = {
  linkedin: {
    authorizationCode: proxyUrl(
      "/authorization",
      {
        response_type: "code",
        client_id: linkedinClientId,
        state: "some_random_state",
        scope: "r_liteprofile r_emailaddress w_member_social",
        redirect_uri: redirectUrls.linkedin
      },
      hosts.linkedin
    ),
    accessTokenByCode: (code: string, linkedinClientSecret: string) =>
      proxyUrl("/accessToken", {
        grant_type: "authorization_code",
        code,
        client_id: linkedinClientId,
        client_secret: linkedinClientSecret,
        redirect_uri: redirectUrls.linkedin
      })
  },
  backend: {
    oauth: {
      linkedin: (code: string, state: string) =>
        proxyUrl(`/oauth/linkedin/callback`, { code, state })
    }
  }
};
