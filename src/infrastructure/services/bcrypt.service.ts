import bcrypt from 'bcryptjs';
import {PasswordHasherService} from '../../domain/services';

export class BcryptPasswordHasher implements PasswordHasherService {
	async compare(plainText: string, hashed: string): Promise<boolean> {
		return bcrypt.compare(plainText, hashed);
	}
	async hashPassword(clave: string): Promise<string> {
		const salt = bcrypt.genSaltSync(10);
		const passwordCrypt = await bcrypt.hashSync(clave, salt);
		return passwordCrypt;
	}
}
