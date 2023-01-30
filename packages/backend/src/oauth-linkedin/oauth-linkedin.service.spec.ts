import { Test, TestingModule } from '@nestjs/testing';
import { OauthLinkedinService } from './oauth-linkedin.service';

describe('OauthLinkedinService', () => {
  let service: OauthLinkedinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthLinkedinService],
    }).compile();

    service = module.get<OauthLinkedinService>(OauthLinkedinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
