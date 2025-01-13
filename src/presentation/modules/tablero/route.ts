import {Router} from 'express';
import {TableroDatasourceImpl} from '../../../infrastructure/datasource/tablero.datasource.impl';
import {TableroRepositoryImpl} from '../../../infrastructure/repository/tablero.repository.impl';
import {TableroController} from './tablero.controller';
import {wrapMethod} from '../../utils/wrap_method';

export class TableroRoutes {
	static get router() {
		const router = Router();

		const datasource = new TableroDatasourceImpl();
		const repository = new TableroRepositoryImpl(datasource);
		const controller = new TableroController(repository);
		router.get('/', wrapMethod(controller.getAll));
		router.post('/', wrapMethod(controller.store));
		router.patch('/:id', wrapMethod(controller.update));
		router.delete('/:id', wrapMethod(controller.delete));
		return router;
	}
}
