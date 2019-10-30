import yargs from 'yargs';

import { createApp } from '../app';

const argv = yargs.options({
  port: { type: 'number', default: 8080 },
}).argv;

createApp().then(app => {
  app.listen(argv.port, async () => {
    // tslint:disable-next-line:no-console
    console.log(`🚀 Server ready at port http://localhost:${argv.port}`);
  });
});
