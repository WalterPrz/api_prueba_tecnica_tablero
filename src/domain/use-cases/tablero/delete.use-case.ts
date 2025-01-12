import {TableroEntity} from '../../entities';
import {CustomError} from '../../errors/CustomError';
import {TableroRepository} from '../../repository';

export interface DeleteTableroUseCase {
	execute(id: number): Promise<TableroEntity>;
}

export class DeleteTablero implements DeleteTableroUseCase {
	constructor(private readonly repository: TableroRepository) {}
	async execute(id: number): Promise<TableroEntity> {
		const tablero = await this.repository.findById(id);
		if (!tablero) {
			throw CustomError.NotFound('No se encontró registro');
		}
		return this.repository.deleteById(id);
	}
}
