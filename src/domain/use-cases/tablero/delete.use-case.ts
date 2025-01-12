import {TableroEntity} from '../../entities';
import {TableroRepository} from '../../repository';

export interface DeleteTableroUseCase {
	execute(id: number): Promise<TableroEntity>;
}

export class DeleteTablero implements DeleteTableroUseCase {
	constructor(private readonly repository: TableroRepository) {}
	async execute(id: number): Promise<TableroEntity> {
		return this.repository.deleteById(id);
	}
}
