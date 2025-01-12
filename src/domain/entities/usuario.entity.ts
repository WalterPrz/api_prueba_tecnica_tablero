export interface UsuarioOptions {
	id: number;
	correo: string;
	clave: string;
	activo: boolean;
	ultimo_login?: Date | null;
	createdAt?: Date;
	updatedAt?: Date | null;
}

export class UsuarioEntity {
	public readonly id: number;
	public correo: string;
	public clave: string;
	public activo: boolean;
	public ultimo_login?: Date | null;
	public createdAt?: Date;
	public updatedAt?: Date | null;

	constructor(options: UsuarioOptions) {
		const {id, correo, clave, activo = true, ultimo_login, createdAt = new Date(), updatedAt} = options;
		this.id = id;
		this.correo = correo;
		this.clave = clave;
		this.activo = activo;
		this.ultimo_login = ultimo_login != null ?  new Date(ultimo_login) :null;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	static fromObject(obj: Partial<UsuarioOptions>): UsuarioEntity {
		if (!obj.id || !obj.correo || !obj.clave ) {
			throw new Error('Missing required properties to create UsuarioEntity');
		}

		return new UsuarioEntity({
			id: obj.id,
			correo: obj.correo,
			clave: obj.clave,
			activo: obj.activo ?? true,
			ultimo_login: obj.ultimo_login != null ? new Date(obj.ultimo_login) : null,
			createdAt: obj.createdAt ?? new Date(),
			updatedAt: obj.updatedAt ?? null,
		});
	}
}
