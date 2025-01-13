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
	static fromObject(obj: Partial<EstadoOptions>): EstadoEntity {
		if (!obj.id || !obj.nombre) {
			throw new Error('Missing required properties to create UsuarioEntity');
		}
		return new EstadoEntity({
			id: obj.id,
			nombre: obj.nombre,
		});
	}
}
