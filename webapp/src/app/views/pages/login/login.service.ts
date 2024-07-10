import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private apiUrl = `${environment.apiUrl}/login`;
    private tokenName = 'token';

    constructor(
        private http: HttpClient,
        private router: Router,
        private cookieService: CookieService,
    ) {}

    login(email: string, password: string) {
        return this.http
            .post<any>(this.apiUrl, { email: email, password: password })
            .pipe(
                map((response) => {
                    // Guardar el token como cookie
                    this.cookieService.set(this.tokenName, response.token);
                    console.log(this.getToken());
                    console.log(this.getUserInfoFromToken());
                    return response;
                }),
            );
    }

    logout() {
        // Eliminar la cookie al cerrar sesión
        this.cookieService.deleteAll();
        this.router.navigateByUrl('/login');
    }

    isLoggedIn(): boolean {
        // Verificar si el usuario está autenticado (comprobando la existencia del token)
        return this.cookieService.check(this.tokenName);
    }

    getToken(): string | undefined {
        // Obtener el token JWT de la cookie
        return this.cookieService.get(this.tokenName);
    }

    getUserInfoFromToken(): any {
        // Decodificar el token JWT y obtener la información del usuario
        const token = this.getToken();
        if (token) {
            return jwt_decode.jwtDecode(token);
        }
        return null;
    }

    isPersonalUser(): boolean {
        // Verifica si el usuario logueado es personal y no es un usuario de empresa
        const tokenPayload = this.getUserInfoFromToken();
        return tokenPayload.isPersonalUser;
    }

    getRoles(): string[] {
        if (this.isPersonalUser()) {
            return ['User'];
        } else {
            return ['Company'];
        }
    }
}
