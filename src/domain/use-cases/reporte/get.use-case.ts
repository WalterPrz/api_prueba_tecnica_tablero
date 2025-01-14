import {ReporteEntity} from '../../entities';
import {ReporteRepository} from '../../repository';

export interface GetReporteUseCase {
	execute(): Promise<ReporteEntity[]>;
}

export class GetReporte implements GetReporteUseCase {
	constructor(private readonly repository: ReporteRepository) {}
	async execute(): Promise<ReporteEntity[]> {
		const data = await this.repository.getReporte();
		return data;
	}
}
