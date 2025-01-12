import {TareaEntity} from './tarea.entity';

export interface TableroOptions {
	id: number;
	nombre: string;
	descripcion: string;
	activo?: boolean;
	createdAt?: Date;
	updatedAt?: Date ;
}

export class TableroEntity {
	public readonly id: number;
	public nombre: string;
	public descripcion: string;
	public activo?: boolean;
	public createdAt?: Date;
	public updatedAt?: Date ;

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
}
