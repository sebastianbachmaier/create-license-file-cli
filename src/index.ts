#!/usr/bin/env node

import { ArgumentParser } from 'argparse';
import pkg from '../package.json';
import { main } from './main';

/** CONSTANTS */
const LICENSES = [
  'MIT',
  'APACHE-2.0',
  'AGPL-3.0',
  'GPL-3.0',
  'LGPL-3.0',
  'MPL-2.0',
  'UNLICENSED',
];

/* ARGUMENTS */
const parser = new ArgumentParser({
  description: 'Create npm package cli',
});

parser.add_argument('-v', '--version', {
  action: 'version',
  version: pkg.version,
  help: 'Show version number',
});

parser.add_argument('-l', '--license', {
  action: 'store',
  dest: 'license',
  help: 'name of the license you want to generate',
  choices: LICENSES,
  type: (value: string) => value.toUpperCase(),
  required: false,
});

parser.add_argument('-a', '--author', {
  help: 'Author name',
  dest: 'author',
  required: false,
});

parser.add_argument('--verbose', {
  help: 'Verbose mode',
  dest: 'verbose',
  action: 'store_true',
  required: false,
});

const args: { license?: string; author?: string; verbose?: boolean } =
  parser.parse_args();

process.exit(main(args.license, args.author, args.verbose));
