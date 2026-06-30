/**
 * HTML to PDF Converter — Grupo Kyna Dosier Tool
 *
 * Convierte un fichero HTML con imágenes embebidas en base64 a un PDF
 * profesional usando puppeteer-core y el Chrome del sistema.
 *
 * USO:
 *   node tools/dosier/html_to_pdf.js <input.html> <output.pdf>
 *
 * EJEMPLO:
 *   node tools/dosier/html_to_pdf.js tools/dosier/output/dosier.html Dosier_Web_Grupo_Kyna.pdf
 *
 * REQUISITOS:
 *   - puppeteer-core instalado (npm install --save-dev puppeteer-core)
 *   - Google Chrome instalado en el sistema
 */

const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

// Rutas comunes de Chrome en Windows
const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.CHROME_PATH
].filter(Boolean);

function findChrome() {
  for (const p of CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('No se encontró Google Chrome. Instálalo o define CHROME_PATH.');
}

(async () => {
  const args = process.argv.slice(2);
  const inputHtml = args[0] || path.join(__dirname, 'output', 'dosier.html');
  const outputPdf = args[1] || path.join(process.cwd(), 'Dosier_Web_Grupo_Kyna.pdf');

  // Resolver ruta absoluta del HTML
  const htmlAbsolute = path.resolve(inputHtml);
  if (!fs.existsSync(htmlAbsolute)) {
    console.error(`Error: No se encontró el fichero HTML: ${htmlAbsolute}`);
    process.exit(1);
  }

  const chromePath = findChrome();
  console.log(`Chrome: ${chromePath}`);
  console.log(`Input:  ${htmlAbsolute}`);
  console.log(`Output: ${path.resolve(outputPdf)}`);
  console.log('');

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Usar file:// protocol con forward slashes
  const fileUrl = `file:///${htmlAbsolute.replace(/\\/g, '/')}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });

  await page.pdf({
    path: path.resolve(outputPdf),
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  const stats = fs.statSync(path.resolve(outputPdf));
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`✓ PDF creado: ${path.resolve(outputPdf)} (${sizeMB} MB)`);
  await browser.close();
})();
