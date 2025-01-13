import {CreateTareaDto, UpdateTareaDto} from '../dtos';
import {TareaEntity} from '../entities/';

export abstract class TareaDatasource {
	abstract create(dto: CreateTareaDto): Promise<TareaEntity>;
	abstract findAll(): Promise<TareaEntity[]>;
	abstract updateById(dto: UpdateTareaDto): Promise<TareaEntity>;
	abstract deleteById(id: number): Promise<TareaEntity>;
	abstract findById(id: number): Promise<TareaEntity | null>;
}
