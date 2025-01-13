import {PrismaConection} from '../../data/postgres';
import {EstadoDatasource} from '../../domain/datasources';
import {EstadoEntity} from '../../domain/entities';

export class EstadlDatasourceImpl implements EstadoDatasource {
	private readonly prisma;
	constructor() {
		this.prisma = PrismaConection.getInstace;
	}
	async findAll(): Promise<EstadoEntity[]> {
		const data = await this.prisma.estado.findMany();
		return data.map((item) => EstadoEntity.fromObject(item));
	}
	async findById(id: number): Promise<EstadoEntity | null> {
		const data = await this.prisma.estado.findUnique({where: {id}});
		if (!data) return null;
		return EstadoEntity.fromObject(data);
	}
}
