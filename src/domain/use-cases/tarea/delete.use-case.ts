import {CustomError} from '../../errors/CustomError';
import {TareaRepository} from '../../repository';

export interface DeleteTareaUseCase {
	execute(id: number): Promise<{message: string}>;
}

export class DeleteTarea implements DeleteTareaUseCase {
	constructor(private readonly repository: TareaRepository) {}
	async execute(id: number): Promise<{message: string}> {
		const tarea = await this.repository.findById(id);
		if (!tarea) {
			throw CustomError.NotFound('No se encontró registro');
		}
		await this.repository.deleteById(id);
		return {message: 'Se eliminó con éxito'};
	}
}
