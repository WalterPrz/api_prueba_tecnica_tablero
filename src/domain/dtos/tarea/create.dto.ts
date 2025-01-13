import {CustomError} from '../../errors/CustomError';

export interface CreateTareaDtoProps {
	titulo: string;
	descripcion: string;
	estado_id: number;
	tablero_id: number;
}
export class CreateTareaDto {
	private constructor(
		public readonly titulo: string,
		public readonly descripcion: string,
		public readonly estado_id: number,
		public readonly tablero_id: number
	) {}
	static create(props: CreateTareaDtoProps) {
		const {titulo, descripcion, estado_id, tablero_id} = props;
		if (!titulo || titulo.trim() === '') {
			throw CustomError.UnprocessableEntity('El título es obligatorio y no puede estar vacío');
		}
		if (titulo.length > 100) {
			throw CustomError.UnprocessableEntity('El título no puede tener más de 100 caracteres');
		}
		if (!descripcion || descripcion.trim() === '') {
			throw CustomError.UnprocessableEntity('La descripción es obligatoria y no puede estar vacía');
		}
		if (descripcion.length > 200) {
			throw CustomError.UnprocessableEntity('La descripción no puede tener más de 200 caracteres');
		}
		if (!Number.isInteger(estado_id) || estado_id <= 0) {
			throw CustomError.UnprocessableEntity('El estado_id debe ser un número entero positivo');
		}
		if (!Number.isInteger(tablero_id) || tablero_id <= 0) {
			throw CustomError.UnprocessableEntity('El tablero_id debe ser un número entero positivo');
		}
		return new CreateTareaDto(titulo.trim(), descripcion.trim(), estado_id, tablero_id);
	}
}
