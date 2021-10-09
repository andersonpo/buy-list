import { Request, Response, NextFunction, IRouter } from 'express';

export default (router: IRouter): IRouter => {
  // Tratamento de Erros (quando não encontrar a rota)
  router.use((req: Request, res: Response, next: NextFunction) => {
    const erro = {
      message: 'Endereço não encontrado "' + req.path + '"',
      statusCode: 404,
    };
    console.error('[Error Route]', erro);
    next(erro);
  });

  router.use(
    (
      response: { message: string; statusCode: number },
      req: Request,
      res: Response,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      next: NextFunction
    ) => {
      const defaultResponse = {
        message: response.message || 'Erro Desconhecido, Tente Novamente!',
      };
      return res.status(response.statusCode || 500).send(defaultResponse);
    }
  );

  return router;
};
