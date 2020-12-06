import { BodyMethods } from "../data/constants";
import { APIMethod, KeyValue } from "../data/types";

export class APIService {

    private headers: string[][] = [];
    private method: APIMethod = "GET";
    private queryParams: string = '';

    public setHeaders(headers: KeyValue<string, string>[]): APIService {

        // format KeyValue types to be called in fetch 
        headers.forEach(h => {
            this.headers.push([h.key, h.value]);
        });

        return this;
    }

    public setParams(params: KeyValue<string, string>[]): APIService {

        if (params) {
            this.queryParams = '?';
        }
        this.queryParams += params.map((item) => {
            return [item.key, item.value].join('=');
        }).join('&');
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

    public async send<T>(url: string, body?: T): Promise<any> {

        let request: RequestInit = {
            headers: this.headers,
            method: this.method,
        }

        if (body && this.hasBody()) {
            request.body = JSON.stringify(body);
        }

        url = this.queryParams ? url + this.queryParams : url;
        let response = await fetch(url, request)
            .then(
                (res) => {
                    return res.json();
                }
            )
            .catch(
                (error) => { 
                    return {
                        status_code: -1,
                        status_message: error.message,
                        success: false,
                        results: []
                    }; 
                }
            );
        
        // When success json response does not provide success attribute
        // so we add it
        if (!response.hasOwnProperty('success')) {
            response.success = true;
        }
        return response;
    }

    private hasBody(): boolean {
        return this.method in BodyMethods;
    }
}
