import { JsonResponse } from "../src";

const moxios = require("moxios");

const intercept = <T>(response: JsonResponse<T>): T => {
    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({ status: 200, response });
    });
    return response.data;
};

export { intercept };
