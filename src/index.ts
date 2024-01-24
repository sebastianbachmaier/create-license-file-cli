#! /usr/bin/env node

import { ArgumentParser } from 'argparse';
import pkg from '../package.json';

const parser = new ArgumentParser({
  description: 'Create npm package cli',
});

parser.add_argument('-v', '--version', {
  action: 'version',
  version: pkg.version,
  help: 'Show version number',
});

parser.parse_args();

export function main() {
  return 0;
}

main();