import dolarAPi from './dolar.routes';

const routes = (server: any): void => {
  server.use('/api/money', dolarAPi);
};

export default routes;
