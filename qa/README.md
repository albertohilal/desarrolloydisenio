# Control QA - LeadMaster

Este control valida la landing en producción con foco en responsive y consistencia funcional.

## Qué valida

- Carga HTTP correcta de la URL.
- Ausencia de overflow horizontal (scroll lateral).
- Presencia visual de marca `LeadMaster`.
- Presencia de CTAs a `https://desarrolloydisenioweb.com.ar/demo-login`.
- Presencia del botón fijo de WhatsApp (`wa.me/5491128809748`).
- Errores de consola en navegador.
- Captura full-page por dispositivo.

## Dispositivos incluidos

- Desktop 1440x900
- Laptop 1366x768
- iPad Portrait
- iPad Landscape
- iPhone 12
- Galaxy S9+

## Ejecución

Desde la raíz del repo:

```bash
cd qa
npm install --no-bin-links -D @playwright/test
QA_RUN_STAMP="$(date +%Y-%m-%dT%H-%M-%S)" node node_modules/@playwright/test/cli.js test leadmaster-device-qa.spec.js --reporter=line
```

Opcional: probar otra URL

```bash
cd qa
QA_URL="https://desarrolloydisenio.com.ar/leadmaster/" QA_RUN_STAMP="$(date +%Y-%m-%dT%H-%M-%S)" node node_modules/@playwright/test/cli.js test leadmaster-device-qa.spec.js --reporter=line
```

## Salidas

Se generan por corrida en:

- `qa/results/<timestamp>/report.md`
- `qa/results/<timestamp>/report.json`
- `qa/results/<timestamp>/*.png`

Si algún dispositivo falla, el script termina con código `1`.
