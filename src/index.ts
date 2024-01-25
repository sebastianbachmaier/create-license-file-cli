import fs from 'node:fs';
import { info } from 'console';

/* CONSTANTS */
const LICENSE_DIR = `${__dirname}/../LICENSES` as const;
const EXIT_FAILURE = 1 as const;
const EXIT_SUCCESS = 0 as const;


/**
 * getLicenses
 * @returns Record<string, string> - key: license name, value: license text template
 */
const getLicenses = () =>
  fs.readdirSync(LICENSE_DIR).reduce(
    (licenses: Record<string, string>, file: string) => ({
      ...licenses,
      [file]: fs.readFileSync(`${LICENSE_DIR}/${file}`, 'utf8'),
    }),
    {} as Record<string, string>
  );

/**
 * readPackageJson
 * @returns Record<string, string> | undefined - package.json as json object
 * @throws Error - package.json is not valid json
 */
function readPackageJson(): Record<string, string> | undefined {
  try {
    const packageJson = fs.readFileSync('./package.json', 'utf8');
    return JSON.parse(packageJson);
  } catch (e) {
    error('package.json is not valid json');
  }
}

/**
 * error
 * @param message - error message
 */
const error = (message: string) => console.error(`\x1b[31m${message}\x1b[0m`);

/**
 * main
 * @param lname - license name
 * @param author - author name, default: package.json author
 * @returns number - exit code
 */
export function main(license?: string, author?: string, verbose?: boolean) {
   /* package.json */
   const packageJson = readPackageJson();
  
   author ??= packageJson?.author;
   license ??= packageJson?.license;
   if (!author || !license) {
     error('author or license not found');
     return EXIT_FAILURE;
   }

  const licenses = getLicenses();
  const licenseText = licenses[`${license}.md`];

  /** license not found */
  if (!licenseText) {
    error(`License ${license} not found`);
    return EXIT_FAILURE;
  }

  /* replace [year] and [fullname] */
  const filledLicense = licenseText
    .replace('[year]', new Date().getFullYear().toString())
    .replace('[fullname]', author);

  if (verbose) {
    info(filledLicense);
  }

  /* write license to license file */
  fs.writeFileSync('./LICENSE.md', filledLicense, 'utf8');
  return EXIT_SUCCESS;
}
