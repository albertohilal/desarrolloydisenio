const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');

const TARGET_URL = process.env.QA_URL || 'https://desarrolloydisenio.com.ar/leadmaster/';
const RUN_STAMP = process.env.QA_RUN_STAMP || new Date().toISOString().replace(/[:.]/g, '-');
const RUN_DIR = path.join(__dirname, 'results', RUN_STAMP);

fs.mkdirSync(RUN_DIR, { recursive: true });

test('QA responsive por dispositivo', async ({ page }, testInfo) => {
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const response = await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
  expect(response, 'La página debe responder').not.toBeNull();
  expect(response.status(), 'HTTP status debe ser < 400').toBeLessThan(400);

  const checks = await page.evaluate(() => {
    const html = document.documentElement;
    const body = document.body;
    const width = window.innerWidth;

    const noHorizontalOverflow = html.scrollWidth <= width + 1 && body.scrollWidth <= width + 1;

    const leadmasterVisible = Array.from(document.querySelectorAll('span, h1, h2, h3, a, p'))
      .some((el) => el.textContent?.trim() === 'LeadMaster');

    const ctaDemoLinks = Array.from(document.querySelectorAll('a[href]'))
      .filter((a) => a.href.includes('desarrolloydisenioweb.com.ar/demo-login')).length;

    const whatsappVisible = !!document.querySelector('a[href*="wa.me/5491128809748"]');

    return {
      noHorizontalOverflow,
      leadmasterVisible,
      ctaDemoLinks,
      whatsappVisible,
    };
  });

  const screenshotFile = path.join(
    RUN_DIR,
    `${testInfo.project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`
  );
  await page.screenshot({ path: screenshotFile, fullPage: true });

  expect(checks.noHorizontalOverflow, 'No debe haber overflow horizontal').toBeTruthy();
  expect(checks.leadmasterVisible, 'La marca LeadMaster debe ser visible').toBeTruthy();
  expect(checks.ctaDemoLinks, 'Debe haber al menos un CTA a demo-login').toBeGreaterThan(0);
  expect(checks.whatsappVisible, 'Debe existir botón/enlace de WhatsApp').toBeTruthy();
  expect(consoleErrors, 'No debe haber errores de consola').toEqual([]);
});

test.afterAll(async () => {
  const summaryFile = path.join(RUN_DIR, 'README.txt');
  fs.writeFileSync(
    summaryFile,
    [
      'QA LeadMaster completado',
      `URL: ${TARGET_URL}`,
      `Fecha: ${new Date().toLocaleString('es-AR')}`,
      `Resultados y capturas: ${RUN_DIR}`,
    ].join('\n')
  );
});
