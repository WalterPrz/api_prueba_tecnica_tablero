import {envs} from './config';
import {Server} from './presentation/Server';
import {ApiRoutes} from './presentation/routes/index';
(() => {
    main();
})();

function main() {
    const server = new Server({
        api_routes: ApiRoutes.routes,
        port: envs.PORT,
    });
    server.start();
}

