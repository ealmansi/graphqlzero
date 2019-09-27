#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
import { run } from './run';

/**
 *
 */
async function main () {
  const pkg = readPackageJson();
  const options =
    yargs
      .usage('$0 [options] <source>')
      .options({
        port: {
          alias: 'p',
          description: 'Set port',
          type: 'number',
          default: 4000
        }
      })
      .help('help')
      .alias('help', 'h')
      .version(pkg.version)
      .alias('version', 'v')
      .argv;
  await run(options);
}

/**
 *
 */
function readPackageJson () {
  return JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '..', '..', 'package.json')
    ).toString()
  );
}

if (require.main === module) {
  main().catch(
    function (err) {
      console.error(err);
      process.exit(1);
    }
  );
}
