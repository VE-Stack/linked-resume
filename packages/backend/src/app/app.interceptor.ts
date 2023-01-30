import { WretchResponseChain } from "wretch";

import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from "@nestjs/common";
import { map, Observable } from "rxjs";

const parseError = (message: string) => ({
  success: false,
  data: null,
  error: JSON.parse(message)
});

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: WretchResponseChain<any>) => {
        if ("badRequest" in data) {
          return data
            .badRequest(res => {
              throw new BadRequestException(parseError(res.message));
            })
            .json();
        }

        return { success: true, data, error: null };
      })
    );
  }
}
