import {Request, Response} from 'express';
import {EstadoRepository, TableroRepository, TareaRepository} from '../../../domain/repository';
import {CreateTarea, DeleteTarea, FindAllTarea, UpdateByIdTarea} from '../../../domain/use-cases';
import {CreateTareaDto, UpdateTareaDto} from '../../../domain/dtos';

export class TareaController {
	constructor(
		private readonly tareaRepository: TareaRepository,
		private readonly tableroRepository: TableroRepository,
		private readonly estadoRepository: EstadoRepository
	) {}
	public getAll = async (req: Request, res: Response): Promise<void> => {
		const datos = await new FindAllTarea(this.tareaRepository).execute();
		res.status(200).json(datos);
	};
	public store = async (req: Request, res: Response): Promise<void> => {
		const dto = CreateTareaDto.create(req.body);
		const data = await new CreateTarea(this.tareaRepository, this.estadoRepository, this.tableroRepository).execute(dto);
		res.status(201).json(data);
	};
	public update = async (req: Request, res: Response): Promise<void> => {
		const {id} = req.params;
		const dto = UpdateTareaDto.create({...req.body, id: +id});
		const data = await new UpdateByIdTarea(this.tareaRepository, this.estadoRepository, this.tableroRepository).execute(dto);
		res.status(200).json(data);
	};

	public delete = async (req: Request, res: Response): Promise<void> => {
		const {id} = req.params;
		const data = await new DeleteTarea(this.tareaRepository).execute(+id);
		res.status(200).json(data);
	};
}
