'use strict';
/* =========================================================
   SOLO PARA EL AMBIENTE DE PRUEBAS (repositorio aprende-con-poli-pruebas). NO pasar a la app final.
   Muestra la etiqueta "🧪 Pruebas" y antepone 🧪 al título de la pestaña, para no confundirlo con la app oficial.
   Solo actúa si la dirección contiene "pruebas".
   ========================================================= */
(() => {
  if (!/pruebas/i.test(location.hostname + location.pathname)) return;
  document.title = '🧪 ' + document.title;
  const st = document.createElement('style');
  st.textContent = '#pruebasTag{position:fixed;top:0;left:50%;transform:translateX(-50%);z-index:70;pointer-events:none;background:#ff8a3d;color:#fff;font:800 11px/1 "Baloo 2",Arial,sans-serif;padding:2px 12px 3px;border-radius:0 0 10px 10px;box-shadow:0 2px 0 #e0651a;letter-spacing:.03em}';
  document.head.append(st);
  document.body.insertAdjacentHTML('beforeend', '<div id="pruebasTag" aria-hidden="true">🧪 Pruebas</div>');
})();
