import {Request, Response} from 'express';
import {AuthRepository} from '../../../domain/repository';
import {AuthLoginDto, AuthRegisterDto} from '../../../domain/dtos';
import {Login} from '../../../domain/use-cases/auth/login.use-case';

import {PasswordHasherService, TokenService} from '../../../domain/services';
import { Register } from '../../../domain/use-cases';

export class AuthController {
	constructor(
		private readonly authRepository: AuthRepository,
		private readonly tokenService: TokenService,
		private readonly hashService: PasswordHasherService
	) {}
	public login =  async (req: Request, res: Response): Promise<void> =>{
		const dto = AuthLoginDto.create(req.body);
		const data = await new Login(this.authRepository, this.tokenService, this.hashService).execute(dto);
		res.status(200).json(data);
	}
	public register =  async (req: Request, res: Response): Promise<void> =>{
		const dto =  AuthRegisterDto.create(req.body);
		const data = await new Register(this.authRepository, this.hashService).execute(dto);
		res.status(201).json(data);
	}
}
