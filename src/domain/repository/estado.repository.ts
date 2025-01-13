import {EstadoEntity} from '../entities';

export abstract class EstadoRepository {
	abstract findAll(): Promise<EstadoEntity[]>;
	abstract findById(id: number): Promise<EstadoEntity | null>;
}
