import {AuthLoginDto} from '../../dtos';
import {UsuarioEntity} from '../../entities';
import {CustomError} from '../../errors/CustomError';
import {AuthRepository} from '../../repository';
import {TokenService, PasswordHasherService} from '../../services';

export interface LoginUseCase {
	execute(dto: AuthLoginDto): Promise<{token: string}>;
}
export class Login implements LoginUseCase {
	constructor(
		private readonly repository: AuthRepository,
		private readonly tokenService: TokenService,
		private readonly passwordHasherService: PasswordHasherService
	) {}
	async execute(dto: AuthLoginDto): Promise<{token: string}> {
		const usuario = await this.repository.findByEmail(dto);
		if (!usuario) {
			throw CustomError.UnprocessableEntity('Credenciales no válidas');
		}
		const isPasswordValid = await this.passwordHasherService.compare(dto.clave, usuario.clave);
		if (!isPasswordValid) {
			throw CustomError.UnprocessableEntity('Credenciales no válidas');
		}
		if (usuario.activo === false) {
			throw CustomError.Forbidden('Usuario desactivado');
		}
		const token = this.tokenService.generateToken({id: usuario.id, correo: usuario.correo}, '1h');
		return {token};
	}
}
