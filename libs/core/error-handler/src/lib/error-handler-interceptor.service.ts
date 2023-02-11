import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, Observable, throwError } from "rxjs";

export const errorHandlingInterceptor = (
    request: HttpRequest<any>,
    next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
    const store = inject(Store);
    return next(request).pipe(
        catchError((error) => {
            if(error instanceof HttpErrorResponse){
                switch(error.status){
                    case 401:
                        store.dispatch(throw401Error({error}));
                        break;
                    case 404:
                        store.dispatch(throw404Error({error}));
                        break;
                    default:
                        throwError( () => new Error(error.error));
                        break;
                }
            }
            return  throwError( () => new Error(error));
        }),
    );

};