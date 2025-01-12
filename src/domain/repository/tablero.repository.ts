import {CreateTableroDto, UpdateTableroDto} from '../dtos';
import {TableroEntity} from '../entities';

export abstract class TableroRepository {
	abstract create(dto: CreateTableroDto): Promise<TableroEntity>;
	abstract findAll(): Promise<TableroEntity[]>;
	abstract updateById(dto: UpdateTableroDto): Promise<TableroEntity>;
	abstract deleteById(id: number): Promise<TableroEntity>;
}
