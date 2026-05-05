# LeadMaster Landing

Proyecto Next.js configurado para exportación estática (`output: 'export'`).

## Desarrollo local

```bash
npm install
npm run dev
```

## Generar versión estática

```bash
npm run build
```

El sitio generado queda en la carpeta `out/`.

## Publicar en iFastNet (hosting compartido)

1. Entra a tu panel de iFastNet y abre el File Manager del dominio.
2. Ve a `public_html/` (o la carpeta del dominio/subdominio).
3. Borra el contenido anterior si quieres reemplazar el sitio.
4. Sube **todo** el contenido de `out/` (no la carpeta `out` completa, sino sus archivos internos).
5. Si usas rutas internas y notas errores 404, crea o ajusta `.htaccess` para fallback:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

Con esto el sitio queda funcionando como web estática en iFastNet.
