import {CreateTableroDto} from '../../dtos';
import {TableroEntity} from '../../entities';
import {TableroRepository} from '../../repository';

export interface CreateTableroUseCase {
	execute(dto: CreateTableroDto): Promise<{message: string}>;
}

export class CreateTablero implements CreateTableroUseCase {
	constructor(private readonly repository: TableroRepository) {}
	async execute(dto: CreateTableroDto): Promise<{message: string}> {
		const data = await this.repository.create(dto);
		return {message: 'Se registró con exito'};
	}
}
