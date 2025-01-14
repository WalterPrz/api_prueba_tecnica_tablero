import {PrismaConection} from '../../data/postgres';
import {ReporteDatasource} from '../../domain/datasources';
import {ReporteEntity} from '../../domain/entities';

export class ReporteDatasourceImpl implements ReporteDatasource {
	private readonly prisma;
	constructor() {
		this.prisma = PrismaConection.getInstace;
	}
	async getReporte(): Promise<ReporteEntity[]> {
		const resultados = await this.prisma.tarea.groupBy({
			by: ['tablero_id', 'estado_id'],
			_count: {
				id: true,
			},
		});
		const tableroResultados: ReporteEntity[] = resultados.reduce((acc, {tablero_id, estado_id, _count}) => {
			
			let tablero = acc.find((t) => t.tablero_id === tablero_id);
			if (!tablero) {
				tablero = {tablero_id, estado: []};
				acc.push(tablero);
			}
			tablero.estado.push({estado_id, count: _count.id});
			return acc;
		}, [] as ReporteEntity[]);
		return tableroResultados;
	}
}
