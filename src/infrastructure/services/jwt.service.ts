import jwt from 'jsonwebtoken';
import {TokenService} from '../../domain/services';

export class JwtTokenService implements TokenService {
	private readonly secret: string;

	constructor(secret: string) {
		this.secret = secret;
	}

	generateToken(payload: object, expiresIn: string): string {
		return jwt.sign(payload, this.secret, {expiresIn});
	}
}
