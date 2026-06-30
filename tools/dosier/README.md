# Herramientas de Generación de Dosier

Este directorio contiene los scripts necesarios para generar automáticamente dosiers web en formato PDF con diseño profesional, a partir de capturas de pantalla de la web.

## Requisitos Previos

- **Node.js** y **npm** instalados.
- El paquete `puppeteer-core` debe estar instalado en el proyecto. Se instaló ejecutando:
  ```bash
  npm install --save-dev puppeteer-core
  ```
- Google Chrome instalado en el sistema (el script `html_to_pdf.js` lo buscará automáticamente).

## Flujo de Trabajo

Para generar un nuevo dosier, sigue estos pasos:

### 1. Capturar las Screenshots
Toma capturas de pantalla (formato `.png`) de las secciones de la web que quieras incluir en el dosier y guárdalas en `tools/dosier/screenshots/`.
Asegúrate de que los nombres de los archivos coincidan con los que espera la plantilla (ej: `home_hero.png`, `home_about.png`, etc.).

### 2. Codificar las Imágenes a Base64
Las imágenes deben convertirse a texto en Base64 para embeberlas directamente en el HTML. Ejecuta:
```powershell
powershell -ExecutionPolicy Bypass -File tools/dosier/encode_images.ps1
```
*Esto generará archivos `.txt` en el directorio `tools/dosier/b64/`.*

### 3. Generar el HTML del Dosier
Un script de Node.js leerá los ficheros en Base64 y los insertará en la plantilla HTML (`template.html`):
```bash
node tools/dosier/generate_dosier.js
```
*Esto creará un archivo `dosier.html` en `tools/dosier/output/`.*

### 4. Convertir a PDF
Usa Puppeteer para renderizar el HTML y exportarlo como un PDF listo para imprimir:
```bash
node tools/dosier/html_to_pdf.js
```
*El PDF final se guardará en el directorio raíz como `Dosier_Web_Grupo_Kyna.pdf` (puedes pasar otros argumentos si quieres cambiar las rutas).*

## Personalización

- **Plantilla HTML**: Puedes modificar `template.html` para cambiar el diseño, los textos o añadir nuevas secciones. Utiliza el formato `${imgs.nombre_del_fichero}` donde quieras insertar una imagen base64.
- **Scripts**: Si cambias la estructura de carpetas, asegúrate de actualizar las rutas por defecto en los scripts.
