import {UpdateTareaDto} from '../../dtos';
import {TareaEntity} from '../../entities';
import {CustomError} from '../../errors/CustomError';
import {EstadoRepository, TableroRepository, TareaRepository} from '../../repository';

export interface UpdateByIdTareaUseCase {
	execute(dto: UpdateTareaDto): Promise<TareaEntity>;
}
export class UpdateByIdTarea implements UpdateByIdTareaUseCase {
	constructor(
		private readonly repository: TareaRepository,
		private readonly estadoRepository: EstadoRepository,
		private readonly tableroRepository: TableroRepository
	) {}
	async execute(dto: UpdateTareaDto): Promise<TareaEntity> {
		const tarea = await this.repository.findById(dto.id);
		if (!tarea) {
			throw CustomError.NotFound('No se encontró registro');
		}
		if (dto.estado_id) {
			const estado = await this.estadoRepository.findById(dto.estado_id);
			if (!estado) throw CustomError.UnprocessableEntity(`No existe el id del estado ${dto.estado_id}`);
		}
		if (dto.tablero_id) {
			const tablero = await this.tableroRepository.findById(dto.tablero_id);
			if (!tablero) throw CustomError.UnprocessableEntity(`No existe el id del tablero ${dto.tablero_id}`);
		}
		return this.repository.updateById(dto);
	}
}
