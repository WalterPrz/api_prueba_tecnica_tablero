import {EstadoDatasource} from '../../domain/datasources';
import {EstadoEntity} from '../../domain/entities';
import {EstadoRepository} from '../../domain/repository';

export class EstadoRepositoryImpl implements EstadoRepository {
	constructor(private readonly datasource: EstadoDatasource) {}
	findAll(): Promise<EstadoEntity[]> {
		return this.datasource.findAll();
	}
	findById(id: number): Promise<EstadoEntity | null> {
		return this.datasource.findById(id);
	}
}
