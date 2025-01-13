import {TareaEntity} from '../../entities';
import {TareaRepository} from '../../repository';

export interface FindAllTareaUseCase {
	execute(): Promise<TareaEntity[]>;
}

export class FindAllTarea implements FindAllTareaUseCase {
	constructor(private readonly repository: TareaRepository) {}
	async execute(): Promise<TareaEntity[]> {
		return this.repository.findAll();
	}
}
