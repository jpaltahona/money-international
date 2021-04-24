import dolarMoney from './dolar.routes';

const routes = (server: any): void => {
  server.use('/api/money', dolarMoney);
};

export default routes;
