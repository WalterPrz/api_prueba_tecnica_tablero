import {CustomError} from '../../errors/CustomError';

export interface CreateTableroDtoProps {
	nombre: string;
	descripcion: string;
}
export class CreateTableroDto {
	private constructor(public readonly nombre: string, public readonly descripcion: string) {}
	static create(props: CreateTableroDtoProps) {
		const {nombre, descripcion} = props;
        console.log("nombre", nombre == null)
		if (nombre == null) {
			throw CustomError.UnprocessableEntity('Nombre es obligatorio');
		}
		if (descripcion == null) {
			throw CustomError.UnprocessableEntity('Descripción es obligatorio');
		}
		if (nombre?.trim() === '' || nombre == null) {
			throw CustomError.UnprocessableEntity('Nombre es obligatorio');
		}
		if (descripcion?.trim() === '' || descripcion == null) {
			throw CustomError.UnprocessableEntity('Descripción es obligatorio');
		}
		return new CreateTableroDto(nombre, descripcion);
	}
}
