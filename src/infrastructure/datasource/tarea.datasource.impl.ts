import {PrismaConection} from '../../data/postgres';
import {TareaDatasource} from '../../domain/datasources';
import {CreateTareaDto, UpdateTareaDto} from '../../domain/dtos';
import {TareaEntity} from '../../domain/entities';

export class TareaDatasourceImpl implements TareaDatasource {
	private readonly prisma;
	constructor() {
		this.prisma = PrismaConection.getInstace;
	}
	async findById(id: number): Promise<TareaEntity | null> {
		const data = await this.prisma.tarea.findUnique({where: {id: id, activo: true}});
		return data;
	}
	async create(dto: CreateTareaDto): Promise<TareaEntity> {
		const data = await this.prisma.tarea.create({
			data: dto,
		});
		return TareaEntity.fromObject(data);
	}
	async findAll(): Promise<TareaEntity[]> {
		const tareas = await this.prisma.tarea.findMany({where: {activo: true}});
		return tareas.map((item) => TareaEntity.fromObject(item));
	}

	async updateById(dto: UpdateTareaDto): Promise<TareaEntity> {
		const updatedData = await this.prisma.tarea.update({
			where: {id: dto.id},
			data: dto,
		});
		return TareaEntity.fromObject(updatedData);
	}
	async deleteById(id: number): Promise<TareaEntity> {
		const updatedData = await this.prisma.tarea.update({
			where: {id},
			data: {activo: false},
		});
		return TareaEntity.fromObject(updatedData);
	}
}
