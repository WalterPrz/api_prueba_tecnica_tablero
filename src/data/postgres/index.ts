import {PrismaClient} from '@prisma/client';

import {envs} from '../../config';

export class PrismaConection {
	private static instance: PrismaClient;
	private constructor() {}

	static get getInstace(): PrismaClient {
		if (!PrismaConection.instance) {
			const dbUser = envs.DB_USER;
			const dbPassword = envs.DB_PASSWORD;
			const dbHost = envs.DB_HOST;
			const dbPort = envs.DB_PORT;
			const dbName = envs.DB_NAME;
			PrismaConection.instance = new PrismaClient({
				datasources: {
					db: {
						url: `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
					},
				},
			});
		}
		return this.instance;
	}
}
