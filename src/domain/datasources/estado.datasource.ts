import {EstadoEntity} from '../entities';

export abstract class EstadoDatasource {
	abstract findAll(): Promise<EstadoEntity[]>;
	abstract findById(id: number): Promise<EstadoEntity | null>;
}
