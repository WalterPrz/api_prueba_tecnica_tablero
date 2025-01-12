import {TableroDatasource} from '../../domain/datasources';
import {CreateTableroDto, UpdateTableroDto} from '../../domain/dtos';
import {TableroEntity} from '../../domain/entities';
import {TableroRepository} from '../../domain/repository';

export class TableroRepositoryImpl implements TableroRepository {
	constructor(private readonly datasource: TableroDatasource) {}
	create(dto: CreateTableroDto): Promise<TableroEntity> {
		return this.datasource.create(dto);
	}
	findAll(): Promise<TableroEntity[]> {
		return this.datasource.findAll();
	}
	updateById(dto: UpdateTableroDto): Promise<TableroEntity> {
		return this.datasource.updateById(dto);
	}
	deleteById(id: number): Promise<TableroEntity> {
		return this.datasource.deleteById(id);
	}
	findById(id: number): Promise<TableroEntity | null> {
		return this.datasource.findById(id);
	}
}
