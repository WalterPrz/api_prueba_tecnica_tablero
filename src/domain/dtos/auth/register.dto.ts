export interface AuthRegisterProps {
	correo: string;
	clave: string;
}
export class AuthRegisterDto {
	private constructor(public readonly correo: string, public readonly clave: string) {}
	static create(props: AuthRegisterProps): AuthRegisterDto {
		const {correo, clave} = props;
		if (!correo) throw new Error('El correo es obligatorio');
		if (correo.trim() === '') {
			throw new Error('El correo no puede ser una cadena vacia');
		}
		if (!clave) throw new Error('La clave es obligatoria');
		if (clave.trim() === '') {
			throw new Error('La clavd no puede ser una cadena vacia');
		}

		return new AuthRegisterDto(correo.trim(), clave.trim());
	}
}
