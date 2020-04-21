import api from "../src/api/client";

const moxios = require("moxios");

beforeEach(() => {
    moxios.install(api.client);
});

afterEach(() => {
    moxios.uninstall(api.client);
});
