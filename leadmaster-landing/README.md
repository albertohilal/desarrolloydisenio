# LeadMaster Landing (WordPress)

Plugin de WordPress para insertar la landing exportada en `leadmaster`.

## Instalación

1. Comprimir la carpeta `leadmaster-landing` en `.zip`.
2. En WordPress ir a **Plugins > Añadir nuevo > Subir plugin**.
3. Subir el `.zip` y activar el plugin.

## Uso

Insertar el shortcode en una página:

```text
[leadmaster_landing]
```

También podés definir alto del iframe:

```text
[leadmaster_landing height="5000px"]
```

Valores válidos para `height`: `px`, `%`, `vh` o `vw`.

## Landing limpia (sin header/footer del tema)

El plugin registra automáticamente la URL:

```text
/leadmaster/
```

Esa ruta renderiza directamente la landing estática (sin plantilla del tema).

Si no abre de inmediato, ir a **Ajustes > Enlaces permanentes** y guardar una vez para refrescar reglas de URL.