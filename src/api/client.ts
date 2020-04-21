/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import axios, { AxiosPromise, AxiosResponse } from "axios";
import { JsonResponse } from "../types";
import { HOSTNAME } from "../constants";

class CondosClient {
    static client = axios.create({ baseURL: `https://${HOSTNAME}/v1` });

    static async get<T>(path: string, params?: unknown): Promise<T> {
        const callback = CondosClient.client.get.bind(CondosClient.client, path, {
            params,
        });
        const data = await CondosClient.resolve<T>(callback);
        return data;
    }

    static async resolve<T>(callback: () => AxiosPromise): Promise<T> {
        const { data, status } = (await callback()) as AxiosResponse<JsonResponse<T>>;
        if (status !== 200) {
            throw new Error(`Got status code ${status}`);
        }
        return data.data as T;
    }
}

export default CondosClient;
