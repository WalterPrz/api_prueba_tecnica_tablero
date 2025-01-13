import {TableroEntity} from '../../entities';
import {TableroRepository} from '../../repository';

export interface FindAllUseCase {
	execute(): Promise<TableroEntity[]>;
}

export class FindAllTableros implements FindAllUseCase {
	constructor(private readonly repository: TableroRepository) {}
	async execute(): Promise<TableroEntity[]> {
		return this.repository.findAll();
	}
}
