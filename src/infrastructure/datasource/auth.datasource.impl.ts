import {AuthDatasource} from '../../domain/datasources';
import {AuthLoginDto, AuthRegisterDto} from '../../domain/dtos';
import {UsuarioEntity} from '../../domain/entities';
import {PrismaConection} from '../../data/postgres';

export class AuthDatasourceImpl implements AuthDatasource {
	private readonly prisma;
	constructor() {
		this.prisma = PrismaConection.getInstace;
	}
	async register(authRegisterDto: AuthRegisterDto): Promise<UsuarioEntity> {
		const data = await this.prisma.usuario.create({
			data: authRegisterDto,
		});
		return UsuarioEntity.fromObject(data);
	}
	async findByEmail(authLoginDto: AuthLoginDto): Promise<UsuarioEntity | null> {
		const data = await this.prisma.usuario.findFirst({
			where: {
				correo: authLoginDto.correo,
			},
		});
		if (!data) return null;
		return UsuarioEntity.fromObject(data);
	}
}
