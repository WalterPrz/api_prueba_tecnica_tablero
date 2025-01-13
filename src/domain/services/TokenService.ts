export interface TokenService {
    generateToken(payload: object, expiresIn: string): string;
    validate(token: string): Promise<boolean>;
}