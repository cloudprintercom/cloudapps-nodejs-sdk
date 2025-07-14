import { HttpClient } from "../http/http-client";

export class User {
    /**
     * @param client
     */
    constructor(client) {
        this.client = Object.assign({}, client);
        const baseUrl = `https://api.cloudprinter.com/clouduser/${client.version}/`;
        this.client.httpClient = new HttpClient(baseUrl, client.headers);
    }

    /**
     * Get user info action.
     * @returns {*}
     */
    getInfo() {
        return this.client.httpClient.makePostRequest('info');
    }
}
