# Aprende con Poli — guía para trabajar en el proyecto

App web estática (HTML + CSS + JS puro, sin dependencias ni build) para niños de 2° básico, guiada por la mascota Poli.
Publicada con GitHub Pages desde `main`: https://wolftechco.github.io/aprende-con-poli/
Contexto general en `README.md`, historial técnico en `CHANGELOG.md`, ideas en `PENDIENTES.md`.

## ⚠️ Este es el AMBIENTE DE PRUEBAS (`aprende-con-poli-pruebas`)
- Se publica en https://wolftechco.github.io/aprende-con-poli-pruebas/ y muestra la etiqueta "🧪 Pruebas". La app final está en el repositorio `aprende-con-poli` (esa es la que usan las familias).
- Aquí **se puede subir directo a `main`** para que la dueña pruebe después; en este repositorio no hace falta Pull Request. La regla de "rama + Pull Request" de más abajo es para el repositorio final.
- Para pasar algo a la app final: crear una rama en `aprende-con-poli` solo con los commits aprobados (`cherry-pick`; **sin este archivo CLAUDE.md**) y abrir el Pull Request hacia su `main`. Ambos repositorios comparten historia, así que no se copia nada a mano.
- Ramas de respaldo: `produccion` (copia de `main` de la app final al sembrar) y las ramas `feature/*`.
- El progreso de cada app se guarda aparte (direcciones distintas). El código es el mismo en los dos repositorios: no agregar diferencias salvo en este archivo.

## Forma de trabajo
- Todo en **español de Chile**, pensado para una niña o niño de 7–8 años: textos cortos, entretenidos y que inviten a descubrir.
  Lo que es para adultos va aparte y solo explica el uso.
- Trabajar en una rama y dejar un **Pull Request hacia `main`**; la dueña del proyecto revisa y hace Merge.
- Si pide "modo plan" o "muéstrame primero": diseñar y mostrar capturas, sin subir nada hasta que apruebe.
- Explicar en simple, sin jerga técnica.

## Reglas de la app
- **Todo debe caber en pantalla sin deslizar** (notebook, tablet y celular, vertical y horizontal). Solo se desliza lo
  largo por naturaleza (álbum, Mi avance, Ajustes, historial de novedades, mapa en celular). Probar con Playwright en varios tamaños.
- Los ejercicios son **al azar** y no se repiten en la sesión (`freshQ`).
- Al acertar, **no cortar a Poli**: avanzar con `afterSay`.
- Conteos de caras/aristas/vértices salen de `stats(id)` (mallas 3D en `MESH`), para que todas las pantallas digan lo mismo.
- Textos de niña/niño con `gx('campeona', 'campeón')`.
- Seguridad: CSP solo `'self'`, nada sale del dispositivo, sin analítica ni servicios externos; datos externos (nombres,
  respaldos) se limpian (`cleanName`, `cleanProfile`).

## Publicar una versión
1. Subir `?v=` en `index.html` **y** `VERSION` en `sw.js` (deben coincidir); si hay un archivo JS nuevo, agregarlo a `FILES` en `sw.js`.
2. La clave del progreso `poligonos-magicos-v1` **no se cambia nunca** (guarda todos los perfiles).
3. Si se renombra, une o elimina una isla: agregar un paso en `MIGRATIONS` (`js/app.js`).
4. Anotar la versión en `CHANGELOG.md` (X.Y.Z). Si hay algo nuevo para apoderados: subir `APPVER` y agregar la entrada en `NEWS` (`js/novedades.js`).
5. Si cambia la estructura (secciones o botones): subir `TOURVER` (`js/recorrido.js`) para que el recorrido aparezca de nuevo.

## Archivos
- `js/app.js`: base (guardado y perfiles, navegación, Poli, voz, mapa, portada) y capítulos 1–2.
- `js/numeros.js`: capítulo 3 · `js/repaso.js`: Repaso, Mi avance, Ajustes, respaldo · `js/novedades.js` · `js/recorrido.js`.
- `css/style.css`: estilos; las reglas por tamaño de pantalla están al final.
