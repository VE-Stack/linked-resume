import { FC, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { endpoints, requests } from "@resume/utils";

import { Paths } from "../../ts/enums";

const LinkedinCallback: FC = () => {
  const [params, setParams] = useSearchParams();
  const [token, setToken] = useState("");

  useEffect(() => {
    const code = params.get("code");
    const state = params.get("state")!;

    const error = params.get("error");
    const errorDescription = params.get("error_description");

    params.delete("code");
    params.delete("state");
    params.delete("error");
    params.delete("error_description");

    if (code) {
      const wretchResponseChain = requests.backend.oauth.linkedin(code, state);
      wretchResponseChain
        .badRequest(res => console.log(JSON.parse(res.text!)))
        .json()
        .then((res: any) => {
          setToken(res.access_token);
        });

      setParams(params);
      return;
    }

    if (error) {
      console.log("error", error);
      console.log("errorDescription", errorDescription);
      setParams(params);
      return;
    }
  }, [params]);

  return (
    <>
      <button
        onClick={() => {
          window.location.href = endpoints.linkedin.authorizationCode.fullUrl;
        }}
      >
        Login with Linkedin
      </button>

      <div>Token: {token}</div>
    </>
  );
};

export default LinkedinCallback;
