import { Request, Response, NextFunction, IRouter } from 'express';
import IDatabase from '../interfaces/IDatabase';
import constants from '../constants';
import routerError from './error-router';
import routerProducts from './product-router';
import routerLists from './list-router';
import routerListItems from './list-items-router';

let appMain: IRouter;

function getAllRoutes(baseUrl: string): any {
  const rotas = appMain.stack
    .filter((r) => r.route)
    .map((r) => {
      return {
        method: Object.keys(r.route.methods)[0].toUpperCase(),
        path: baseUrl + r.route.path,
      };
    });

  return rotas;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function defaultResponse(req: Request, res: Response, next: NextFunction) {
  const baseUrl = req.protocol + '://' + req.header('host');
  const rotas = getAllRoutes(baseUrl);

  res.status(200).send({
    title: 'API Documentation',
    endpoints: rotas,
  });
}

export default (router: IRouter, database: IDatabase): IRouter => {
  appMain = router;

  router.get('/', defaultResponse);
  router.use(constants.ENDPOINT_PRODUCTS, routerProducts(router, database));
  router.use(constants.ENDPOINT_LISTS, routerLists(router, database));
  router.use(constants.ENDPOINT_LISTITEM, routerListItems(router, database));
  router.use(routerError(router));

  // eslint-disable-next-line no-console
  console.log('rotas', getAllRoutes(''));

  return router;
};
