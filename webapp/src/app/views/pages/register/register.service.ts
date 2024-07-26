import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RegisterService {
    private apiUrl = `${environment.apiUrl}/users`;

    constructor(private http: HttpClient) {}

    register(email: string, password: string) {
        return this.http.post<any>(this.apiUrl, {
            email: email,
            password: password,
        });
    }
}
