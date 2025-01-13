import {Router} from 'express';
import {TableroDatasourceImpl} from '../../../infrastructure/datasource/tablero.datasource.impl';
import {TareaDatasourceImpl} from '../../../infrastructure/datasource/tarea.datasource.impl';
import {TableroRepositoryImpl} from '../../../infrastructure/repository/tablero.repository.impl';
import {TareaController} from './tarea.controller';
import {TareaRepositoryImpl} from '../../../infrastructure/repository/tarea.repository.impl';
import {EstadoRepositoryImpl} from '../../../infrastructure/repository/estado.repository.impl';
import {EstadoDatasourceImpl} from '../../../infrastructure/datasource/estado.datasource.impl';
import { wrapMethod } from '../../utils/wrap_method';

export class TareaRoutes {
	static get router() {
		const router = Router();
		const datasource = new TareaDatasourceImpl();
		const tableroDatasource = new TableroDatasourceImpl();
		const estadoDatasource = new EstadoDatasourceImpl();
		const tableroRepository = new TableroRepositoryImpl(tableroDatasource);
		const estadoRepository = new EstadoRepositoryImpl(estadoDatasource);
		const repository = new TareaRepositoryImpl(datasource);
		const controller = new TareaController(repository, tableroRepository, estadoRepository);

		router.get('/', wrapMethod(controller.getAll));
		router.post('/', wrapMethod(controller.store));
		router.patch('/:id', wrapMethod(controller.update));
		router.delete('/:id', wrapMethod(controller.delete));
		return router;
	}
}
