import { BodyMethods } from "../data/constants";
import { APIMethod, KeyValue } from "../data/types";

export class APIService {

    private headers: string[][] = [];
    private method: APIMethod = "GET";
    private queryParams: string = '';

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

    public setParams(params: KeyValue<string, string>[]) : APIService {
        
        if (params) {
            this.queryParams = '?';
        }
        this.queryParams += params.map((item) => {return [item.key, item.value].join('=')}).join('&');
        return this;
    }

    public resetHeaders() {
        this.headers = [];
    }

    public resetParams() {
        this.queryParams = '';
    }

    public setMethod(method: APIMethod): APIService {
        
        this.method = method;
        return this;
    }

    public async send<T>(url: string, body?: T) {

        let request: RequestInit = {
            headers: this.headers,
            method: this.method,
        }

        if (body && this.hasBody()) {
            request.body = JSON.stringify(body);
        }
        
        url = this.queryParams ? url + this.queryParams : url;
        let response = await fetch(url, request).then((res) => res.json());

        return response;
    }

    private hasBody(): boolean {
        return this.method in BodyMethods;
    }
}