import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CompaniesService {
    private apiUrl = `${environment.apiUrl}/companies`;

    constructor(
        private http: HttpClient,
        private router: Router,
        private cookieService: CookieService,
    ) {}

    create(name: string) {
        let token = this.cookieService.get('token');
        const headers = new HttpHeaders().set(
            'authorization',
            `Bearer ${token}`,
        );
        return this.http
            .post<any>(this.apiUrl, { name: name }, { headers })
            .pipe(
                map((response) => {
                    return response;
                }),
            );
    }
}
