import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

/**
 * Dont allow with NestJS 7 export const GetUser = createParamDecorator((data, req): User => {
    return req.user;
});
 */
export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    console.log('-------------------------- Get-user', req.user);
    return req.user;
  },
);
