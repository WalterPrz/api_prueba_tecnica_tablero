export interface EstadoOptions {
	id: number;
	nombre: string;
}

export class EstadoEntity {
	public readonly id: number;
	public nombre: string;

	constructor(options: EstadoOptions) {
		const {id, nombre} = options;
		this.id = id;
		this.nombre = nombre;
	}
}
