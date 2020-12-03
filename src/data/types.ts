export type KeyValue<T, U> = {
    key: T,
    value: U
}

export type APIMethod = "GET" | "POST" | "PUT";

export type APIResult = "success" | "failure";

export type APIError = {
    ErrorCode: string,
    Description: string
}

export type APIResponse<T> = {
    Result: APIResult,
    Response: T | APIError
}
