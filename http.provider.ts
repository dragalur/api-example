import axios, { AxiosResponse } from 'axios';

export class ApiProvider {
    public get = <T = any>(url: string, headers = {}): Promise<T> => {
        return axios
            .get(url, { headers: { ...this.defaultHeaders(), ...headers } })
            .then(this.parseResponse)
            .catch(console.log);
    };

    private defaultHeaders = () => {
        return { Accept: 'application/json' };
    };

    private parseResponse = (response: AxiosResponse) => response.data;
}
