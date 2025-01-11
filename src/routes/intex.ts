import { Router } from 'express';

export class ApiRoutes {
    static get routes(): Router {
        const router =  Router();
        return router;
    }
}