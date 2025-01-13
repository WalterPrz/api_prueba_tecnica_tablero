import jwt from 'jsonwebtoken';
import {TokenService} from '../../domain/services';

export class JwtTokenService implements TokenService {
	private readonly secret: string;

	constructor(secret: string) {
		this.secret = secret;
	}
	async validate(token: string): Promise<boolean> {
		try {
			jwt.verify(token, this.secret);
			return true;
		} catch (error) {
			return false;
		}
	}

	generateToken(payload: object, expiresIn: string): string {
		return jwt.sign(payload, this.secret, {expiresIn});
	}
}
