// Request object for login
import { apiURL } from './common';
import { APIRequestContext, APIResponse } from '@playwright/test';

export class LoginRequest {
    private request: APIRequestContext;
    private url: string;

    constructor(request: APIRequestContext) {
        this.request = request;
        this.url = `${apiURL}/auth/login`;
    }

    async post(username: string, password: string): Promise<APIResponse> {
        return this.request.post(this.url, {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
            },
            data: {
                username,
                password,
            },
        });
    }
}
