export default Object.freeze({
  HOSTNAME: process.env.HOSTNAME || 'localhost',    
  PORT: process.env.PORT as unknown as number || 3000,
  PAGE_INDEX: 1,
  PAGE_SIZE: 10,
  DATABASE_PATH: process.env.DATABASE_PATH || 'database.db',
});
