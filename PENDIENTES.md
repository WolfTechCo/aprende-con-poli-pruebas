# Plan de entregas (solo en el ambiente de pruebas · actualizado el 21-11-2026)

## Entrega 1 · versión 2.4.0 · rama `entrega-1` (lista para probar; falta aprobación para pasarla a la app final)
- [x] Reporte de uso y opinión (estrellas de 0,5 a 5 y comentario), saludo según la hora, mejor voz.
- [x] Capítulo 4: Patrones (3 islas, lección de inicio, juegos y Gran Desafío).
- [x] Campana para Novedades · "+" para el menú del mapa · volver a la portada desde el mapa · "Recorrido" en Ajustes.
- [x] Botones más compactos y en formato "texto + botón" (Ajustes, Desbloquear).
- [x] Pestañas de capítulos en una fila · isla compacta en celulares bajos.
- [x] Textos: el nombre se dice una sola vez en el saludo; las lecciones no repiten "¡Hola, nombre!".
- [x] Novedades curadas (solo lo valioso para las familias) y recorrido actualizado (`TOURVER` 2).
- [ ] Pruebas en tablet y notebook · revisar con la dueña en su celular · después Pull Request a `aprende-con-poli`.
- [ ] Reporte por correo o formulario: falta el correo del proyecto (`FEEDBACK_MAIL` en `js/opinion.js`).

## Entrega 2 · versión 3.0.0 (rediseño de la estructura; después de la investigación y de decidir)
- [ ] Un solo lugar para gestionar perfiles (crear, cambiar, renombrar, eliminar, respaldo).
- [ ] Reordenar Álbum, Mi avance y Ajustes; qué hace el contador de estrellas (hoy no hace nada al tocarlo).
- [ ] Medallas fuera de Mi avance (lugar nuevo), diploma (ya aprobado, está en `integrada-2.8.6`), guardarropa de Poli y racha.
- [ ] Recordar dónde estaba al volver a la app (perfil y mapa, sin pasar por la portada).
- Investigación de mercado hecha: ver el informe y decidir (punto 11 del plan).

## Entrega 3 · voz neuronal pregrabada (baja prioridad; cuando ya esté casi todo en la app final)
- [ ] Revisar y clasificar los textos (hay muchos con nombre y números al azar) · cuenta de Azure la crea la dueña.

---

# Ideas pendientes (para más adelante)

## Contenidos
- **Capítulo de simetría:** ejes de simetría, completar la mitad de una figura y encontrar objetos simétricos.
- **Patrones (ampliar):** crear patrones propios (el capítulo 4 ya tiene seguir y completar patrones).
- **Capítulo de medir y comparar:** largo, más alto / más bajo, más pesado / más liviano.
- **Más variedad de preguntas en el capítulo 1** (polígonos).
- **Sumas C + D + U con letras repetidas** (1D + 1C + 1D + 1D + 1U = 131). Baja prioridad: las sumas desordenadas ya están.
- **Más materias** (Lenguaje, Ciencias…): portada con selector de materia; Poli con un accesorio distinto por materia.

## App
- **App Android (APK) gratis** con PWABuilder/Bubblewrap, para que Kids Space de Lenovo muestre el ícono de Poli. Necesita un sitio `wolftechco.github.io` con el archivo de verificación.
- **Reporte por correo o formulario:** el reporte con estrellas ya existe en Ajustes; falta el correo del proyecto (`FEEDBACK_MAIL` en `js/opinion.js`), que se llena al final.
- **Voz neuronal pregrabada** (entrega 3): ver `docs/plan-audio-tts.md` y `PLAN.md`.
- **Estructura nueva de secciones** (entrega 2): perfiles en un solo lugar, premios, rincón de adultos, contador de estrellas, recordar dónde estaba. Ver `PLAN.md` y `docs/investigacion-mercado.md`.
- En celular algunos textos del recorrido ocupan 3 líneas (caben completos); acortarlos si se quiere 2.

## Por probar
- En tablet y celular reales: instalación, modo sin internet, recorrido y novedades.
