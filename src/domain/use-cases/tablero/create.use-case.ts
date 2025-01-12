import {CreateTableroDto} from '../../dtos';
import {TableroEntity} from '../../entities';
import {TableroRepository} from '../../repository';

export interface CreateTableroUseCase {
	execute(dto: CreateTableroDto): Promise<TableroEntity>;
}

export class CreateTablero implements CreateTableroUseCase {
	constructor(private readonly repository: TableroRepository) {}
	async execute(dto: CreateTableroDto): Promise<TableroEntity> {
		return this.repository.create(dto);
	}
}
