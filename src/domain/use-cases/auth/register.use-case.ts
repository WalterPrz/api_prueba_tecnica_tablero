import {AuthRegisterDto} from '../../dtos';
import {UsuarioEntity} from '../../entities';
import { CustomError } from '../../errors/CustomError';
import {AuthRepository} from '../../repository';
import {PasswordHasherService} from '../../services';

export interface RegisterUseCase {
	execute(dto: AuthRegisterDto): Promise<{message: string; status: boolean}>;
}
export class Register implements RegisterUseCase {
	constructor(private readonly repository: AuthRepository, private readonly passwordHasherService: PasswordHasherService) {}
	async execute(dto: AuthRegisterDto): Promise<{message: string; status: boolean}> {
        const existingUser =  await this.repository.findByEmail(dto);
        if(existingUser){
            throw CustomError.UnprocessableEntity('Email ya registrado');
        }
		const newPassword = await this.passwordHasherService.hashPassword(dto.clave);
		await this.repository.register({...dto, clave: newPassword});
		return {message: 'Se registró el usuario exitosamente', status: true};
	}
}
