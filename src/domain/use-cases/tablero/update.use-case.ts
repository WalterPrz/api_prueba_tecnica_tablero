import {UpdateTableroDto} from '../../dtos';
import {TableroEntity} from '../../entities';
import {TableroRepository} from '../../repository';

export interface UpdateByIdTableroUseCase {
	execute(dto: UpdateTableroDto): Promise<TableroEntity>;
}
export class UpdateByIdTablero implements UpdateByIdTableroUseCase {
	constructor(private readonly repository: TableroRepository) {}
	execute(dto: UpdateTableroDto): Promise<TableroEntity> {
		return this.repository.updateById(dto);
	}
}
