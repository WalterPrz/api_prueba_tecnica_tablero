import {CustomError} from '../../errors/CustomError';
import {CreateTareaDtoProps} from './create.dto';

export type UpdateTareaDtoProps = {
	id: number;
} & Partial<CreateTareaDtoProps>;

export class UpdateTareaDto {
	private constructor(
		public readonly id: number,
		public readonly titulo?: string,
		public readonly descripcion?: string,
		public readonly estado_id?: number,
		public readonly tablero_id?: number
	) {}
	static create(props: UpdateTareaDtoProps) {
		const {id, titulo, descripcion, estado_id, tablero_id} = props;
		if (!id || !Number.isInteger(id) || id <= 0) {
			throw CustomError.UnprocessableEntity('El ID es obligatorio y debe ser un número enteor positivo');
		}
		let sanitizedTitulo: string | undefined;
		if (titulo != null) {
			sanitizedTitulo = UpdateTareaDto.sanitizeString(titulo);
			if (sanitizedTitulo.trim() === '') {
				throw CustomError.UnprocessableEntity('El título no puede estar vacío');
			}
			if (sanitizedTitulo.length > 100) {
				throw CustomError.UnprocessableEntity('El título no puede tener más de 100 caracteres');
			}
		}
		let sanitizedDescripcion: string | undefined;
		if (descripcion != null) {
			sanitizedDescripcion = UpdateTareaDto.sanitizeString(descripcion);
			if (sanitizedDescripcion.trim() === '') {
				throw CustomError.UnprocessableEntity('La descripción no puede estar vacía');
			}
			if (sanitizedDescripcion.length > 200) {
				throw CustomError.UnprocessableEntity('La descripción no puede tener más de 200 caracteres');
			}
		}
		if (estado_id != null && (!Number.isInteger(estado_id) || estado_id <= 0)) {
			throw CustomError.UnprocessableEntity('El estado_id debe ser un número entero positivo');
		}
		if (tablero_id != null && (!Number.isInteger(tablero_id) || tablero_id <= 0)) {
			throw CustomError.UnprocessableEntity('El tablero_id debe ser un número entero positivo');
		}
		return new UpdateTareaDto(id, sanitizedTitulo, sanitizedDescripcion, estado_id, tablero_id);
	}
	private static sanitizeString(value: string): string {
		// Eliminar espacios innecesarios
		let sanitized = value.trim();
		sanitized = sanitized.replace(/<script.*?>.*?<\/script>/gi, '');
		sanitized = sanitized.replace(/[<>]/g, '');
		sanitized = sanitized.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, (char) => {
			// Escapar caracteres de control peligrosos
			switch (char) {
				case '\0':
					return '\\0';
				case '\x08':
					return '\\b';
				case '\x09':
					return '\\t';
				case '\x1a':
					return '\\z';
				case '\n':
					return '\\n';
				case '\r':
					return '\\r';
				case '"':
				case "'":
				case '\\':
				case '%':
					return `\\${char}`;
				default:
					return char;
			}
		});

		return sanitized;
	}
}
