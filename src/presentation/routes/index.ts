import {Router} from 'express';
import {NotFoundHandler} from '../handler/not_found';
import {AuthRoutes} from '../modules/auth/routes';
import {TableroRoutes} from '../modules/tablero/route';
import {EstadoRoutes} from '../modules/estado/routes';
import {TareaRoutes} from '../modules/tarea/route';
import {envs} from '../../config';
import {JwtTokenService} from '../../infrastructure/services/jwt.service';
import {AuthMiddleware} from '../middlewares/auth.middleware';

export class ApiRoutes {
	static get routes(): Router {
		const router = Router();
		const tokenValidator = new JwtTokenService(envs.JWT_SECRET!);
		const authMiddleware = new AuthMiddleware(tokenValidator);
		router.use('/v1/auth', AuthRoutes.router);
		router.use('/v1/tablero', [authMiddleware.handle], TableroRoutes.router);
		router.use('/v1/estado', [authMiddleware.handle], EstadoRoutes.router);
		router.use('/v1/tarea', [authMiddleware.handle], TareaRoutes.router);
		const notFoundApi = new NotFoundHandler();
		router.use(notFoundApi.returnNotFound);
		return router;
	}
}
