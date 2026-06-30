/**
 * Generador de Dosier de Cliente en PDF — Grupo Kyna
 *
 * Lee la plantilla HTML, convierte los recursos locales a base64, los inserta
 * en la plantilla y genera un PDF de exactamente 2 páginas utilizando Puppeteer.
 *
 * USO:
 *   node tools/dosier/generate_client_dossier.js
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

// Rutas de Google Chrome en Windows
const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.CHROME_PATH
].filter(Boolean);

function findChrome() {
  for (const p of CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('No se encontró Google Chrome en las rutas estándar. Por favor, define la variable de entorno CHROME_PATH.');
}

function imageToBase64(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`No se encontró la imagen en: ${filePath}`);
  }
  const fileBuffer = fs.readFileSync(filePath);
  return fileBuffer.toString('base64');
}

async function main() {
  const rootDir = path.resolve(__dirname, '../..');
  const templatePath = path.join(__dirname, 'client_dossier_template.html');
  const outputHtmlPath = path.join(__dirname, 'output', 'dosier_cliente.html');
  const outputPdfPath = path.join(rootDir, 'Dosier_Kyna_Carpinteria.pdf');

  console.log('--- Iniciando Generación de Dosier de Cliente ---');

  // 1. Cargar la plantilla HTML
  if (!fs.existsSync(templatePath)) {
    console.error(`Error: No existe la plantilla ${templatePath}`);
    process.exit(1);
  }
  let templateContent = fs.readFileSync(templatePath, 'utf8');

  // 2. Cargar e integrar imágenes en Base64
  const imagesToEncode = {
    logo: path.join(rootDir, 'public', 'images', 'brand', 'logo-blanco.png'),
    muebles: path.join(rootDir, 'public', 'images', 'carpinteria', 'productos', 'custom-muebles.png'),
    librerias: path.join(rootDir, 'public', 'images', 'carpinteria', 'productos', 'custom-librerias.png'),
    vestidores: path.join(rootDir, 'public', 'images', 'carpinteria', 'productos', 'custom-vestidores.png'),
  };

  const encodedImages = {};
  for (const [key, imagePath] of Object.entries(imagesToEncode)) {
    try {
      console.log(`Codificando imagen: ${key} (${path.basename(imagePath)})...`);
      encodedImages[key] = imageToBase64(imagePath);
      console.log(`  ✓ Codificada con éxito.`);
    } catch (err) {
      console.error(`Error al codificar la imagen ${key}:`, err.message);
      process.exit(1);
    }
  }

  // 3. Reemplazar los marcadores en la plantilla
  for (const [key, base64Value] of Object.entries(encodedImages)) {
    const placeholder = `\${imgs.${key}}`;
    templateContent = templateContent.split(placeholder).join(base64Value);
    console.log(`  ✓ Reemplazado ${placeholder} en la plantilla.`);
  }

  // 4. Escribir el HTML resultante
  const outputDir = path.dirname(outputHtmlPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(outputHtmlPath, templateContent, 'utf8');
  console.log(`\n✓ HTML intermedio generado en: ${outputHtmlPath}`);

  // 5. Renderizar a PDF con Puppeteer
  try {
    const chromePath = findChrome();
    console.log(`\nIniciando Puppeteer con Chrome: ${chromePath}`);

    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    const fileUrl = `file:///${path.resolve(outputHtmlPath).replace(/\\/g, '/')}`;

    console.log(`Abriendo archivo en el navegador...`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });

    console.log(`Exportando a PDF A4 sin márgenes...`);
    await page.pdf({
      path: outputPdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' }
    });

    await browser.close();

    const stats = fs.statSync(outputPdfPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`\n✓ PDF del Dosier creado con éxito: ${outputPdfPath} (${sizeMB} MB)`);
    console.log('-------------------------------------------------');
  } catch (err) {
    console.error('\nError durante la generación del PDF:', err.message);
    process.exit(1);
  }
}

main();
