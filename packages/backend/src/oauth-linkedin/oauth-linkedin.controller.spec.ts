import { Test, TestingModule } from '@nestjs/testing';
import { OauthLinkedinController } from './oauth-linkedin.controller';

describe('OauthLinkedinController', () => {
  let controller: OauthLinkedinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OauthLinkedinController],
    }).compile();

    controller = module.get<OauthLinkedinController>(OauthLinkedinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
