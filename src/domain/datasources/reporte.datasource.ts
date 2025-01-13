import {ReporteEntity} from '../entities/reporte.entity';

export abstract class ReporteDatasource {
	abstract getReporte(): Promise<ReporteEntity[]>;
}
