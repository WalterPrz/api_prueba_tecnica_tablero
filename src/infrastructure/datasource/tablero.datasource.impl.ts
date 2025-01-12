import {PrismaConection} from '../../data/postgres';
import {TableroDatasource} from '../../domain/datasources';
import {CreateTableroDto, UpdateTableroDto} from '../../domain/dtos';
import {TableroEntity} from '../../domain/entities';

export class TableroDatasourceImpl implements TableroDatasource {
	private readonly prisma;
	constructor() {
		this.prisma = PrismaConection.getInstace;
	}
	async findById(id: number): Promise<TableroEntity | null> {
		const data = await this.prisma.tablero.findUnique({where: {id: id, activo: true}});
		return data;
	}
	async create(dto: CreateTableroDto): Promise<TableroEntity> {
		const data = await this.prisma.tablero.create({
			data: dto,
		});
		return TableroEntity.fromObject(data);
	}
	async findAll(): Promise<TableroEntity[]> {
		const tableros = await this.prisma.tablero.findMany({where: {activo: true}});
		return tableros.map((item) => TableroEntity.fromObject(item));
	}

	async updateById(dto: UpdateTableroDto): Promise<TableroEntity> {
		const updatedData = await this.prisma.tablero.update({
			where: {id: dto.id},
			data: dto,
		});
		return TableroEntity.fromObject(updatedData);
	}
	async deleteById(id: number): Promise<TableroEntity> {
		const updatedData = await this.prisma.tablero.update({
			where: {id},
			data: {activo: false},
		});
		return TableroEntity.fromObject(updatedData);
	}
}
