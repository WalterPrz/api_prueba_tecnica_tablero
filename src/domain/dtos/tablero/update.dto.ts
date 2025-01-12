import {CustomError} from '../../errors/CustomError';
import {CreateTableroDtoProps} from './create.dto';

export type UpdateTableroDtoProps = {
	id: number;
} & Partial<CreateTableroDtoProps>;

export class UpdateTableroDto {
	private constructor(public readonly id: number, public readonly nombre?: string, public readonly descripcion?: string) {}
	static create(props: UpdateTableroDtoProps) {
		const {id, nombre, descripcion} = props;
		if (!id) {
			throw CustomError.UnprocessableEntity('El ID es obligatorio');
		}
		if (nombre != null && nombre.trim() === '') {
			throw CustomError.UnprocessableEntity('Nombre no puede estar vacío');
		}
		if (descripcion != null && descripcion.trim() === '') {
			throw CustomError.UnprocessableEntity('Descripción no puede estar vacía');
		}
		return new UpdateTableroDto(+id, nombre, descripcion);
	}
}
