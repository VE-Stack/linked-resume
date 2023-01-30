import { Injectable } from "@nestjs/common";

import { requests } from "@resume/utils";

import { CallbackDto } from "./dto/callback.dto";
import { linkedinClientSecret } from "../utils/env";

@Injectable()
export class OauthLinkedinService {
  callback(body: CallbackDto) {
    return requests.linkedin.accessTokenByCode(body.code, linkedinClientSecret);
  }
}
