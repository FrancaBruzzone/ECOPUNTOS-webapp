import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { LoginService } from '../pages/login/login.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService implements CanActivate {
    constructor(
        private router: Router,
        private loginService: LoginService,
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ):
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
        const allowedRoles: string[] = route.data['allowedRoles'];

        let isLoggedIn = true;
        let userRoles = this.loginService.getRoles();

        if (isLoggedIn && this.checkRoles(allowedRoles, userRoles)) {
            return true;
        } else {
            this.router.navigate(['/400']);
            return false;
        }
    }

    private checkRoles(allowedRoles: string[], userRoles: string[]): boolean {
        return userRoles.some((item) => allowedRoles.includes(item));
    }
}
