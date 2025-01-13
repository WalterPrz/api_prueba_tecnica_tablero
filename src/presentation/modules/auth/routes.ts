import {Router} from 'express';

import {wrapMethod} from '../../utils/wrap_method';
import {AuthDatasourceImpl} from '../../../infrastructure/datasource/auth.datasource.impl';
import {AuthRepositoryImpl} from '../../../infrastructure/repository/auth.respository.impl';
import {AuthController} from './auth.controller';
import {JwtTokenService} from '../../../infrastructure/services/jwt.service';
import {envs} from '../../../config';
import {BcryptPasswordHasher} from '../../../infrastructure/services/bcrypt.service';

export class AuthRoutes {
	static get router() {
		const router = Router();
		const datasource = new AuthDatasourceImpl();
		const repository = new AuthRepositoryImpl(datasource);
		const tokenService = new JwtTokenService(envs.JWT_SECRET!);
		const hashService = new BcryptPasswordHasher();

		const authController = new AuthController(repository, tokenService, hashService);

		router.post('/login', wrapMethod(authController.login));
		router.post('/register', wrapMethod(authController.register));

		return router;
	}
}
