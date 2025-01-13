import {AuthLoginDto, AuthRegisterDto} from '../dtos';
import {UsuarioEntity} from '../entities';

export abstract class AuthRepository {
	abstract findByEmail(loginDto: AuthLoginDto): Promise<UsuarioEntity | null>;
	abstract register(registerDto: AuthRegisterDto): Promise<UsuarioEntity>;
}
