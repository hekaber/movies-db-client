import { BodyMethods } from "../data/constants";
import { APIMethod, KeyValue } from "../data/types";

export class APIService {

    private headers: string[][] = [];
    private method: APIMethod = "GET";

    constructor(private authToken: string) {
        this.headers.push(['Authorization', 'Bearer ' + authToken]);
    }

    public setHeaders(headers: KeyValue<string, string>[]): APIService {
        
        // format KeyValue types to be called in fetch 
        headers.forEach(h => {
            if (h.hasOwnProperty('key') && h.hasOwnProperty('value')) {
                this.headers.push([h.key, h.value]);
            }
        });

        return this;
    }

    public resetHeaders() {
        this.headers = [];
    }

    public setMethod(method: APIMethod): APIService {
        
        this.method = method;
        return this;
    }

    public request<T> (body: T): RequestInit {
        let request: RequestInit = {
            headers: this.headers,
            method: this.method,
        }

        if (this.hasBody()) {
            request.body = JSON.stringify(body);
        }
        return request;
    }

    private hasBody(): boolean {
        return this.method in BodyMethods;
    }
}