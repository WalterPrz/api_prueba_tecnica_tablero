import {CreateTableroDto, UpdateTableroDto} from '../dtos';
import {TableroEntity} from '../entities/tablero.entity';

export abstract class TableroDatasource {
	abstract create(dto: CreateTableroDto): Promise<TableroEntity>;
	abstract findAll(): Promise<TableroEntity[]>;
	abstract updateById(dto: UpdateTableroDto): Promise<TableroEntity>;
	abstract deleteById(id: number): Promise<TableroEntity>;
	abstract findById(id: number): Promise<TableroEntity | null>;
}
