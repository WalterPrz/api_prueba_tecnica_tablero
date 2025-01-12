import {UpdateTableroDto} from '../../dtos';
import {TableroEntity} from '../../entities';
import {CustomError} from '../../errors/CustomError';
import {TableroRepository} from '../../repository';

export interface UpdateByIdTableroUseCase {
	execute(dto: UpdateTableroDto): Promise<TableroEntity>;
}
export class UpdateByIdTablero implements UpdateByIdTableroUseCase {
	constructor(private readonly repository: TableroRepository) {}
	async execute(dto: UpdateTableroDto): Promise<TableroEntity> {
		const tablero = await this.repository.findById(dto.id);
		if (!tablero) {
			throw CustomError.NotFound('No se encontró registro');
		}
		return this.repository.updateById(dto);
	}
}
