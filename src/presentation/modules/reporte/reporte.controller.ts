import {Request, Response} from 'express';
import {ReporteRepository} from '../../../domain/repository';
import {GetReporte} from '../../../domain/use-cases';

export class ReporteController {
	constructor(private readonly repository: ReporteRepository) {}
	getReporte = async (req: Request, res: Response): Promise<void> => {
		const data = await new GetReporte(this.repository).execute();
		res.status(200).json(data);
	};
}
