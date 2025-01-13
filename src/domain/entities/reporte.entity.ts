interface EstadoReporteOptions {
	estado_id: number;
	count: number;
}
export class EstadoReporteEntity {
	estado_id: number;
	count: number;
	constructor(options: EstadoReporteOptions) {
		const {estado_id, count} = options;
		this.estado_id = estado_id;
		this.count = count;
	}
}

export interface ReporteOptions {
	tablero_id: number;
	estado: EstadoReporteEntity[];
}

export class ReporteEntity {
	public tablero_id: number;
	public estado: EstadoReporteEntity[];

	constructor(options: ReporteOptions) {
		const {tablero_id, estado} = options;
		this.tablero_id = tablero_id;
		this.estado = estado;
	}
}
