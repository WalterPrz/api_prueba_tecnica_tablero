import {AuthLoginDto, AuthRegisterDto} from '../dtos';
import {UsuarioEntity} from '../entities';

export abstract class AuthDatasource {
	abstract findByEmail(authLoginDto: AuthLoginDto): Promise<UsuarioEntity | null>;
	abstract register(authRegisterDto: AuthRegisterDto): Promise<UsuarioEntity>;
}
