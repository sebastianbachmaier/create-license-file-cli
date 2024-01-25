# create-license-file-cli

npx command that create a license file either by specifying author pr parsing `package.json`

### usage

```
create-license-file-cli [-h] [-v] [-l {MIT,APACHE-2.0,AGPL-3.0,GPL-3.0,LGPL-3.0,MPL-2.0,UNLICENSED}] [-a AUTHOR] [--verbose]

Create npm package cli

optional arguments:
  -h, --help            show this help message and exit
  -v, --version         Show version number
  -l {MIT,APACHE-2.0,AGPL-3.0,GPL-3.0,LGPL-3.0,MPL-2.0,UNLICENSED}, --license {MIT,APACHE-2.0,AGPL-3.0,GPL-3.0,LGPL-3.0,MPL-2.0,UNLICENSED}
                        name of the license you want to generate
  -a AUTHOR, --author AUTHOR
                        Author name
  --verbose             Verbose mode

```

### example

```
npx create-license-file-cli

```