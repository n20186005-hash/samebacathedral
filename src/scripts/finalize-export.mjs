import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
const root = 'out';
const locales = new Set(['en', 'ru', 'tr', 'zh-Hans', 'zh-Hant']);
let count = 0;
async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await visit(path);
    else if (entry.name.endsWith('.html')) {
      const first = relative(root, path).split(/[\\/]/)[0];
      const lang = locales.has(first) ? first : 'ka';
      let html = await readFile(path, 'utf8');
      html = html.replace(/(<html\b[^>]*\blang=")[^"]*(")/, `$1${lang}$2`);
      if (/^(404|_not-found)(\/|\.|$)/.test(relative(root, path))) {
        html = html.replace(/<meta name="(?:robots|googlebot)"[^>]*>/g, '');
        html = html.replace('</head>', '<meta name="robots" content="noindex, nofollow"/></head>');
      }
      await writeFile(path, html);
      count++;
    }
  }
}
await visit(root);
if (count < 30) throw new Error(`Unexpected static export: only ${count} HTML files`);
console.log(`Finalized language and error metadata in ${count} exported HTML files.`);
