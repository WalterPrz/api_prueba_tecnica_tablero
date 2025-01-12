import {AuthDatasource} from '../../domain/datasources';
import {AuthLoginDto, AuthRegisterDto} from '../../domain/dtos';
import {UsuarioEntity} from '../../domain/entities';
import {AuthRepository} from '../../domain/repository';

export class AuthRepositoryImpl implements AuthRepository {
	constructor(private readonly datasource: AuthDatasource) {}
	register(registerDto: AuthRegisterDto): Promise<UsuarioEntity> {
		return this.datasource.register(registerDto);
	}

	findByEmail(loginDto: AuthLoginDto): Promise<UsuarioEntity | null> {
		return this.datasource.findByEmail(loginDto);
	}
}
