import {CreateTareaDto} from '../../dtos';
import {CustomError} from '../../errors/CustomError';
import {EstadoRepository, TableroRepository, TareaRepository} from '../../repository';

export interface CreateTareauseCase {
	execute(dto: CreateTareaDto): Promise<{message: string}>;
}

export class CreateTarea implements CreateTareauseCase {
	constructor(
		private readonly repository: TareaRepository,
		private readonly estadoRepository: EstadoRepository,
		private readonly tableroRepository: TableroRepository
	) {}
	async execute(dto: CreateTareaDto): Promise<{message: string}> {
		const estado = await this.estadoRepository.findById(dto.estado_id);
		if (!estado) throw CustomError.UnprocessableEntity(`No existe el id del estado ${dto.estado_id}`);
		const tablero = await this.tableroRepository.findById(dto.tablero_id);
		if (!tablero) throw CustomError.UnprocessableEntity(`No existe el id del tablero ${dto.tablero_id}`);
		await this.repository.create(dto);
		return {message: 'Se registró con exito'};
	}
}