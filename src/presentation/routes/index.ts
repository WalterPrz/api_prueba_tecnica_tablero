import {Router} from 'express';
import {NotFoundHandler} from '../handler/not_found';
import {AuthRoutes} from '../modules/auth/routes';

export class ApiRoutes {
	static get routes(): Router {
		const router = Router();
		router.use('/v1/auth', AuthRoutes.router);
		const notFoundApi = new NotFoundHandler();
		router.use(notFoundApi.returnNotFound);
		return router;
	}
}
