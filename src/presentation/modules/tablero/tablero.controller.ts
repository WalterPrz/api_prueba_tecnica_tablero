import {Request, Response} from 'express';
import {TableroRepository} from '../../../domain/repository';
import {CreateTablero, DeleteTablero, FindAllTableros, UpdateByIdTablero} from '../../../domain/use-cases';
import {CreateTableroDto, UpdateTableroDto} from '../../../domain/dtos';

export class TableroController {
	constructor(private readonly tableroRepository: TableroRepository) {}
	public getAll = async (req: Request, res: Response): Promise<void> => {
		const datos = await new FindAllTableros(this.tableroRepository).execute();
		res.status(200).json(datos);
	};
	public store = async (req: Request, res: Response): Promise<void> => {
		const dto = CreateTableroDto.create(req.body);
		const data = await new CreateTablero(this.tableroRepository).execute(dto);
		res.status(201).json(data);
	};
	public update = async (req: Request, res: Response): Promise<void> => {
		const {id} = req.params;
		const dto = UpdateTableroDto.create({...req.body, id: +id});
		const data = await new UpdateByIdTablero(this.tableroRepository).execute(dto);
		res.status(200).json(data);
	};

	public delete = async (req: Request, res: Response): Promise<void> => {
		const {id} = req.params;
		const data = await new DeleteTablero(this.tableroRepository).execute(+id);
		res.status(200).json(data);
	};
}
