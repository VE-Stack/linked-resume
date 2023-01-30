import { Post, Controller, Body } from "@nestjs/common";
import { OauthLinkedinService } from "./oauth-linkedin.service";
import { CallbackDto } from "./dto/callback.dto";

@Controller("oauth/linkedin")
export class OauthLinkedinController {
  constructor(private readonly oauthLinkedinService: OauthLinkedinService) {}

  @Post("callback")
  callback(@Body() body: CallbackDto) {
    return this.oauthLinkedinService.callback(body);
  }
}
