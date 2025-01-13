import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
export const swaggerDocs = {
	swaggerDocument: yaml.load('./src/presentation/docs/swagger.yml'),
	swaggerUi: swaggerUi,
};
