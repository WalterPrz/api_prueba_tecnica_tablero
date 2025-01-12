export interface PasswordHasherService {
	compare(plainText: string, hashed: string): Promise<boolean>;
	hashPassword(clave: string): Promise<string>;
}
