import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';
import * as connect from 'connect';
import * as serveStatic from 'serve-static';
import * as httpShutdown from 'http-shutdown';

import { port } from './config';

const dist = path.join(__dirname, '..', 'tmp/');

if (!fs.existsSync(dist)) {
  console.error(`Project not present in ${dist}. Run: 'yarn test:build'`);
  process.exit(1);
}

export default function() {
  const app = connect().use(serveStatic(dist));
  const httpServer = http.createServer(app);
  const server = httpShutdown(httpServer);

  return new Promise((resolve, reject) => {
    server.listen(port, () => {
      resolve(server);
    });
  });
}
