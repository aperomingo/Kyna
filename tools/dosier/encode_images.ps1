# Dosier PDF Generator — Grupo Kyna
# Codifica imágenes PNG a Base64 para embeber en el HTML del dosier.
#
# USO:
#   powershell -ExecutionPolicy Bypass -File tools\dosier\encode_images.ps1
#
# Las imágenes fuente deben estar en tools\dosier\screenshots\
# Los ficheros Base64 se generan en tools\dosier\b64\
#
# Estructura de nombres esperada:
#   screenshots\home_hero.png, screenshots\home_about.png, etc.
#   El script genera: b64\home_hero.txt, b64\home_about.txt, etc.

param(
  [string]$ScreenshotDir = (Join-Path $PSScriptRoot "screenshots"),
  [string]$OutputDir     = (Join-Path $PSScriptRoot "b64")
)

# Crear directorio de salida si no existe
if (-not (Test-Path $OutputDir)) {
  New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

# Codificar cada PNG encontrado
$pngs = Get-ChildItem -Path $ScreenshotDir -Filter "*.png" -ErrorAction Stop
if ($pngs.Count -eq 0) {
  Write-Error "No se encontraron imágenes PNG en: $ScreenshotDir"
  exit 1
}

foreach ($img in $pngs) {
  $key = [IO.Path]::GetFileNameWithoutExtension($img.Name)
  $b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($img.FullName))
  $outFile = Join-Path $OutputDir "$key.txt"
  [IO.File]::WriteAllText($outFile, $b64)
  Write-Host "  ✓ Encoded: $key ($([math]::Round($img.Length / 1KB))KB)"
}

Write-Host ""
Write-Host "Done — $($pngs.Count) images encoded to $OutputDir"
