import {Router} from 'express';
import {EstadoDatasourceImpl} from '../../../infrastructure/datasource/estado.datasource.impl';
import {EstadoRepositoryImpl} from '../../../infrastructure/repository/estado.repository.impl';
import {wrapMethod} from '../../utils/wrap_method';
import {EstadoController} from './estado.controller';

export class EstadoRoutes {
	static get router() {
		const router = Router();
		const datasource = new EstadoDatasourceImpl();
		const repository = new EstadoRepositoryImpl(datasource);
		const controller = new EstadoController(repository);

		router.get('/', wrapMethod(controller.getAll));
		return router;
	}
}
