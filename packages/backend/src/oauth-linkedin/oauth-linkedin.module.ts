import { Module } from '@nestjs/common';
import { OauthLinkedinService } from './oauth-linkedin.service';
import { OauthLinkedinController } from './oauth-linkedin.controller';

@Module({
  providers: [OauthLinkedinService],
  controllers: [OauthLinkedinController]
})
export class OauthLinkedinModule {}
