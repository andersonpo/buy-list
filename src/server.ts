import http from 'http';
import app from './app';
import environment from './environment';

const server = http.createServer(app);

server.listen(environment.PORT, environment.HOSTNAME, () => {
  // eslint-disable-next-line no-console
  console.log(
    `\n\nServidor disponivel em http://localhost:${environment.PORT}`
  );
});

server.once('error', (err) => {
  console.error('\n\nErro não tratado no servidor\n', err);
});
