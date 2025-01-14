import {ReporteDatasource} from '../../domain/datasources';

import {ReporteEntity} from '../../domain/entities';
import {ReporteRepository} from '../../domain/repository';

export class ReporteRepositoryImpl implements ReporteRepository {
	constructor(private readonly datasource: ReporteDatasource) {}
	getReporte(): Promise<ReporteEntity[]> {
		return this.datasource.getReporte();
	}
}
