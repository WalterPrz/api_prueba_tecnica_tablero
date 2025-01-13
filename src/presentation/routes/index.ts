import {Router} from 'express';
import {NotFoundHandler} from '../handler/not_found';
import {AuthRoutes} from '../modules/auth/routes';
import {TableroRoutes} from '../modules/tablero/route';
import {EstadoRoutes} from '../modules/estado/routes';

export class ApiRoutes {
	static get routes(): Router {
		const router = Router();
		router.use('/v1/auth', AuthRoutes.router);
		router.use('/v1/tablero', TableroRoutes.router);
		router.use('/v1/estado', EstadoRoutes.router);
		const notFoundApi = new NotFoundHandler();
		router.use(notFoundApi.returnNotFound);
		return router;
	}
}
