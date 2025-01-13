import {ReporteEntity} from '../entities';

export abstract class ReporteRepository {
	abstract getReporte(): Promise<ReporteEntity[]>;
}
