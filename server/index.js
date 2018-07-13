import 'babel-polyfill';
import express from 'express';

class Server {
  constructor() {
    const { argv } = process,
          content = argv[argv.indexOf('--content') + 1],
          port = process.env.PORT || argv[argv.indexOf('--port') + 1],
          app = express();

    app.listen(port, (err) => {
      err && console.log('App failed to start caused by %s', err.message);
      !err && console.log('App is listening at port %s', port);
    });

    app.use('/', express.static(content));
  }
}

new Server();