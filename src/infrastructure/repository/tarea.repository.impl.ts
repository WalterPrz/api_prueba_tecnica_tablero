import {TareaDatasource} from '../../domain/datasources';
import {CreateTareaDto, UpdateTareaDto} from '../../domain/dtos';
import {TareaEntity} from '../../domain/entities';
import {TareaRepository} from '../../domain/repository';

export class TareaRepositoryImpl implements TareaRepository {
	constructor(private readonly datasource: TareaDatasource) {}
	create(dto: CreateTareaDto): Promise<TareaEntity> {
		return this.datasource.create(dto);
	}
	findAll(): Promise<TareaEntity[]> {
		return this.datasource.findAll();
	}
	updateById(dto: UpdateTareaDto): Promise<TareaEntity> {
		return this.datasource.updateById(dto);
	}
	deleteById(id: number): Promise<TareaEntity> {
		return this.datasource.deleteById(id);
	}
	findById(id: number): Promise<TareaEntity | null> {
		return this.datasource.findById(id);
	}
}
