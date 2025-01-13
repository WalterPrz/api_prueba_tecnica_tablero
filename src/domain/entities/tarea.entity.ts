import {EstadoEntity} from './estado.entity';
import {TableroEntity} from './tablero.entity';

export interface TareaOptions {
	id: number;
	titulo: string;
	descripcion: string;
	tablero_id: number;
	estado_id: number;
	activo: boolean;
	createdAt?: Date;
	updatedAt?: Date | null;
}

export class TareaEntity {
	public readonly id: number;
	public titulo: string;
	public descripcion: string;
	public tablero_id: number;
	public estado_id: number;
	public activo?: boolean;
	public createdAt?: Date;
	public updatedAt?: Date | null;
	public tablero?: TableroEntity;
	public estado?: EstadoEntity;

	constructor(options: TareaOptions) {
		const {id, titulo, descripcion, tablero_id, estado_id, activo = true, createdAt = new Date(), updatedAt} = options;
		this.id = id;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.tablero_id = tablero_id;
		this.estado_id = estado_id;
		this.activo = activo;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}
