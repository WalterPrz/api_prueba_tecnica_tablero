import {EstadoEntity, TableroEntity} from '../../entities';
import {EstadoRepository} from '../../repository';

export interface FindAllEstadoUseCase {
	execute(): Promise<EstadoEntity[]>;
}

export class FindAllEstados implements FindAllEstadoUseCase {
	constructor(private readonly repository: EstadoRepository) {}
	async execute(): Promise<EstadoEntity[]> {
		return this.repository.findAll();
	}
}
