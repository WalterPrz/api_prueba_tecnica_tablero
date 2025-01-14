import express, {Router, Express} from 'express';
import * as http from 'http';
import compression from 'compression';
import {handlerError} from '../handler/error_handler';
import {swaggerDocs} from '../../config';
import cors from 'cors';
import corsConfig from '../../config/cors';
interface Options {
	port: number;
	api_routes: Router;
	public_path?: string;
}

export class Server {
	public readonly app: Express;
	private readonly port: number;
	private serverListener?: http.Server;
	private readonly apiRoutes: Router;
	private readonly publicPath: string;
	constructor(options: Options) {
		const {port, api_routes, public_path = 'public'} = options;
		this.port = port;
		this.apiRoutes = api_routes;
		this.app = express();
		this.publicPath = public_path;
	}
	async start() {
		//* middleware
		this.app.use(cors(corsConfig));
		this.app.use(express.json({limit: '5mb'}));
		this.app.use(express.urlencoded({limit: '5mb', extended: true, parameterLimit: 50000}));
		this.app.use(compression());

		//* public folder

		this.app.use('/api-docs', swaggerDocs.swaggerUi.serve, swaggerDocs.swaggerUi.setup(swaggerDocs.swaggerDocument));
		this.app.use(express.static(this.publicPath));

		//* Routes
		this.app.use('/api', this.apiRoutes);

		//* SPA

		// this.app.get('*', (req, res) => {
		//     const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`)
		//     res.sendFile(indexPath)
		//     return
		// }
		//* error handler()
		this.app.use(handlerError);

		//* start
		this.serverListener = this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}`);
		});
	}
	public close() {
		this.serverListener?.close();
	}
}
