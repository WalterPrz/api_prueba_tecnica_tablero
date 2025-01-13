export interface AuthLoginDtoProps {
	correo: string;
	clave: string;
  }
export class AuthLoginDto {
	private constructor(public readonly correo: string, public readonly clave: string) {}
	static create(props: AuthLoginDtoProps): AuthLoginDto {
		const {correo, clave} = props;
		if (!correo) throw new Error('El correo es obligatorio');
		if (correo.trim() === '') {
			throw new Error('El correo no puede ser una cadena vacia');
		}
		if (!clave) throw new Error('La clave es obligatoria');
		if (clave.trim() === '') {
			throw new Error('La clavd no puede ser una cadena vacia');
		}

		return new AuthLoginDto(correo.trim(), clave.trim());
	}
}
