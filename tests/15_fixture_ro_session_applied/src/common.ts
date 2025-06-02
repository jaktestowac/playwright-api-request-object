import { APIRequestContext } from "@playwright/test";
import { LoginRequest } from "./login-request";

export const apiURL = '/api/practice/v1/weather';

export async function login(request: APIRequestContext, username: string, password: string):
 Promise<string> {
    const loginRequest = new LoginRequest(request);
    const loginResponse = await loginRequest.post(username, password);
    const responseBody = await loginResponse.json();
    return responseBody.token;
}