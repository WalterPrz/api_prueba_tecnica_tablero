import { envs } from './config';
import { Server } from './presentation/Server';
import { ApiRoutes } from './routes/intex';
const server = new Server({
    api_routes: ApiRoutes.routes,
    port: envs.PORT,
});