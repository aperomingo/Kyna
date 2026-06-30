/**
 * Dosier HTML Generator — Grupo Kyna
 *
 * Lee ficheros Base64 de screenshots y genera un HTML autocontenido
 * con diseño profesional listo para convertir a PDF.
 *
 * USO:
 *   node tools/dosier/generate_dosier.js [--b64-dir <dir>] [--output <file>] [--template <file>]
 *
 * EJEMPLO:
 *   node tools/dosier/generate_dosier.js
 *   node tools/dosier/generate_dosier.js --output tools/dosier/output/dosier.html
 *
 * OPCIONES:
 *   --b64-dir    Directorio con ficheros .txt de imágenes en base64 (default: tools/dosier/b64)
 *   --output     Ruta del HTML de salida (default: tools/dosier/output/dosier.html)
 *   --template   Ruta de la plantilla HTML (default: tools/dosier/template.html)
 *
 * PLANTILLA:
 *   El fichero template.html debe contener placeholders como ${imgs.nombre_clave}
 *   donde nombre_clave coincide con el nombre del fichero .txt sin extensión.
 *
 * REQUISITOS:
 *   - Ficheros .txt con base64 en el directorio b64/
 *   - Plantilla HTML en template.html
 */

const fs = require('fs');
const path = require('path');

// Parse arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    b64Dir:   path.join(__dirname, 'b64'),
    output:   path.join(__dirname, 'output', 'dosier.html'),
    template: path.join(__dirname, 'template.html')
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--b64-dir' && args[i + 1])   { opts.b64Dir = path.resolve(args[++i]); }
    if (args[i] === '--output' && args[i + 1])     { opts.output = path.resolve(args[++i]); }
    if (args[i] === '--template' && args[i + 1])   { opts.template = path.resolve(args[++i]); }
  }

  return opts;
}

function main() {
  const opts = parseArgs();

  // Load base64 images
  if (!fs.existsSync(opts.b64Dir)) {
    console.error(`Error: No existe el directorio de base64: ${opts.b64Dir}`);
    console.error('Ejecuta primero: powershell -ExecutionPolicy Bypass -File tools\\dosier\\encode_images.ps1');
    process.exit(1);
  }

  const imgs = {};
  const files = fs.readdirSync(opts.b64Dir).filter(f => f.endsWith('.txt'));

  if (files.length === 0) {
    console.error(`Error: No se encontraron ficheros .txt en: ${opts.b64Dir}`);
    process.exit(1);
  }

  for (const file of files) {
    const key = path.basename(file, '.txt');
    imgs[key] = fs.readFileSync(path.join(opts.b64Dir, file), 'utf8').trim();
    console.log(`  ✓ Loaded: ${key} (${(imgs[key].length / 1024).toFixed(0)}KB b64)`);
  }

  // Load template
  if (!fs.existsSync(opts.template)) {
    console.error(`Error: No existe la plantilla: ${opts.template}`);
    console.error('Crea el fichero template.html en tools/dosier/');
    process.exit(1);
  }

  let template = fs.readFileSync(opts.template, 'utf8');

  // Replace all ${imgs.KEY} placeholders
  for (const [key, value] of Object.entries(imgs)) {
    const placeholder = `\${imgs.${key}}`;
    const count = template.split(placeholder).length - 1;
    if (count > 0) {
      template = template.split(placeholder).join(value);
      console.log(`  ✓ Replaced: ${placeholder} (${count} occurrence${count > 1 ? 's' : ''})`);
    }
  }

  // Check for unreplaced placeholders
  const remaining = template.match(/\$\{imgs\.\w+\}/g);
  if (remaining) {
    console.warn(`\n  ⚠ Placeholders sin resolver: ${[...new Set(remaining)].join(', ')}`);
    console.warn('  Asegúrate de que existan los ficheros base64 correspondientes.');
  }

  // Write output
  const outputDir = path.dirname(opts.output);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(opts.output, template, 'utf8');
  const sizeMB = (fs.statSync(opts.output).size / (1024 * 1024)).toFixed(2);

  console.log('');
  console.log(`✓ HTML generado: ${opts.output} (${sizeMB} MB)`);
  console.log(`  Imágenes embebidas: ${files.length}`);
  console.log('');
  console.log('Siguiente paso — Convertir a PDF:');
  console.log(`  node tools/dosier/html_to_pdf.js "${opts.output}" "Dosier_Web_Grupo_Kyna.pdf"`);
}

main();
