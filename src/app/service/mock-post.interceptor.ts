import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs';

export class MockPostInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'POST' && req.url.endsWith('/api/detail')) {
      const response = new HttpResponse({
        status: 200,
        body: { message: '数据正常' },
      });
      return of(response).pipe(delay(1000));
    }

    return next.handle(req);
  }
}
