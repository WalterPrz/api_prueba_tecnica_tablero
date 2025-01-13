import {Request, Response, NextFunction} from 'express';
import {JwtTokenService} from '../../infrastructure/services/jwt.service';
import {CustomError} from '../../domain/errors/CustomError';
import {handlerError} from '../handler/error_handler';

export class AuthMiddleware {
	constructor(private readonly tokenValidator: JwtTokenService) {}

	public handle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const authHeader = req.headers.authorization;

			if (!authHeader || !authHeader.startsWith('Bearer ')) {
				throw CustomError.Unauthorized('Token no proporcionado o no válido');
			}

			const token = authHeader!.split(' ')[1];

			const isValid = await this.tokenValidator.validate(token);
			if (!isValid) {
				throw CustomError.Forbidden('Token no proporcionado o no válido');
			}

			next();
		} catch (e) {
			next(e);
		}
	};
}
