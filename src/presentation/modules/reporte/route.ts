import {Router} from 'express';
import {wrapMethod} from '../../utils/wrap_method';
import {ReporteController} from './reporte.controller';
import {ReporteRepositoryImpl} from '../../../infrastructure/repository/reporte.repository.impl';
import {ReporteDatasourceImpl} from '../../../infrastructure/datasource/reporte.datasource.impl';

export class ReporteRoutes {
	static get router() {
		const router = Router();
		const datasource = new ReporteDatasourceImpl();
		const repository = new ReporteRepositoryImpl(datasource);
		const controller = new ReporteController(repository);

		router.get('/', wrapMethod(controller.getReporte));
		return router;
	}
}
