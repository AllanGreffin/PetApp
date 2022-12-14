import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    getToken() {
        let user = JSON.parse(localStorage.getItem('user') as string);
        return user?.token;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        const token = this.getToken();
    
        if (token) {
            request = request.clone({
                setHeaders: {Authorization: `Bearer ${token}`}
            });
        }
    
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.router.navigateByUrl('/login');
            };
            const error = err.error.message || err.statusText;
            return throwError(() => new Error('error no interceptor ' + error));
        }));
    }
}