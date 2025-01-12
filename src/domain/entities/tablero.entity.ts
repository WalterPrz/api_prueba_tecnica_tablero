import {TareaEntity} from './tarea.entity';

export interface TableroOptions {
	id: number;
	nombre: string;
	descripcion: string;
	activo?: boolean;
	createdAt?: Date;
	updatedAt?: Date | null;
}

export class TableroEntity {
	public readonly id: number;
	public nombre: string;
	public descripcion: string;
	public activo?: boolean;
	public createdAt?: Date;
	public updatedAt?: Date | null;

	public tareas?: TareaEntity[];

	constructor(options: TableroOptions) {
		const {id, nombre, descripcion, activo = true, createdAt = new Date(), updatedAt} = options;
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.activo = activo;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	static fromObject(obj: Partial<TableroOptions>): TableroEntity {
		if (!obj.id || !obj.nombre || !obj.descripcion) {
			throw new Error('Missing required properties to create UsuarioEntity');
		}

		return new TableroEntity({
			id: obj.id,
			nombre: obj.nombre,
			descripcion: obj.descripcion,
			activo: obj.activo ?? true,
			createdAt: obj.createdAt ?? new Date(),
			updatedAt: obj.updatedAt ? new Date(obj.updatedAt) : null,
		});
	}
}
