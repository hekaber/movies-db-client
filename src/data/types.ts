export type KeyValue<T, U> = {
    key: T,
    value: U
}

export type APIMethod = "GET" | "POST" | "PUT";

export type ListResponse<T> = {
    success: boolean,
    page: number,
    results: T[],
    total_pages: number,
    total_results: number
}
