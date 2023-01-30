import { Module } from "@nestjs/common";
import { OauthLinkedinModule } from "./oauth-linkedin/oauth-linkedin.module";

@Module({
  imports: [OauthLinkedinModule]
})
export class AppModule {}
