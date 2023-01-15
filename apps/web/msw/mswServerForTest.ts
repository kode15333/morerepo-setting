import {setupServer, SetupServerApi} from 'msw/node';
import {handlers} from "./handlers";

export const mswServerForTest = (): SetupServerApi => {

    const server = setupServer(
        ...handlers
    );

    beforeAll(() => server.listen());
    afterAll(() => server.close());
    afterEach(() => server.resetHandlers());

    return server;
};

