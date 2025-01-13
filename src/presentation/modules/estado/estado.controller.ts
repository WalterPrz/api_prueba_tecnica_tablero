import {Request, Response} from 'express';
import {EstadoRepository} from '../../../domain/repository';
import {FindAllEstados} from '../../../domain/use-cases';

export class EstadoController {
	constructor(private readonly estadoRepository: EstadoRepository) {}
	public getAll = async (req: Request, res: Response): Promise<void> => {
		const data = await new FindAllEstados(this.estadoRepository).execute();
		res.status(200).json(data);
	};
}
