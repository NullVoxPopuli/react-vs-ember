import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';
import * as connect from 'connect';
import * as serveStatic from 'serve-static';
import { port } from './config';

const dist = path.join(__dirname, '..', 'tmp/');

if (!fs.existsSync(dist)) {
  console.error(`Project not present in ${dist}. Run: 'yarn test:build'`);
  process.exit(1);
}

const app = connect().use(serveStatic(dist));

http.createServer(app).listen(port, () => {
  console.log('Test Server Listening...')
})
