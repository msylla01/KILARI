import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpResponse } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { HttpEvent } from "@angular/common/http";
import { tap } from "rxjs/operators";

import { SpinnerService } from "./Spinner.service";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class RestInterceptor implements HttpInterceptor {
  constructor(
    private userService: UserService,
    private spinnerService: SpinnerService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.method === "POST") {
      this.spinnerService.showSpinner();
      console.log("interceptor start", req.url);
      let userConnecter = this.userService.getUser();

      if (userConnecter) {
        req.body.user = userConnecter.id;
        console.log("interceptor user id :", req.body.user);
      }
    }

    if (req.method === "PUT") {
      this.spinnerService.showSpinner();
      console.log("interceptor start", req.url);
      let userConnecter = this.userService.getUser();

      if (userConnecter) {
        req.body.user = userConnecter.id;
        console.log("interceptor user id :", req.body.user);
      }
    }

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          console.log("interceptor end");
          if (event instanceof HttpResponse) {
            if (req.method === "POST") {
              this.spinnerService.hideSpinner();
            }
          }
        },
        (error) => {
          console.log("interceptor end");
          this.spinnerService.hideSpinner();
        }
      )
    );
  }
}
