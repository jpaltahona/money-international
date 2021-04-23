const config = {
  mongo: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 27017,
    database: process.env.DATABASE || 'moneyDB',
  },
  dolarURL: process.env.DOLAR_URL || 'https://api.clickup.com/api/v2/',
  dolarHost: process.env.DOLAR_HOST || 'currency26.p.rapidapi.com',
  dolarApiKey: process.env.API_KEY || '3e145c02a5mshd5aa02a0558e374p164099jsn355af2542355'
};

export default config;
