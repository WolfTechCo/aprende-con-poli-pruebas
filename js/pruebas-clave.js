'use strict';
/* =========================================================
   SOLO PARA EL AMBIENTE DE PRUEBAS. NO pasar a la app final.
   La app final y la de pruebas viven en la misma dirección base (wolftechco.github.io), así que el navegador les daba
   el mismo lugar para guardar: el progreso se mezclaba. Aquí pruebas usa su propia clave (se carga ANTES de js/app.js).
   La primera vez copia el progreso de la app final, para seguir probando con los mismos jugadores (la final no se toca).
   ========================================================= */
(() => {
  if (!/pruebas/i.test(location.hostname + location.pathname)) return;
  self.POLI_KEY = 'poligonos-magicos-pruebas';
  try {
    if (localStorage.getItem(self.POLI_KEY) === null) {
      const real = localStorage.getItem('poligonos-magicos-v1');
      if (real) localStorage.setItem(self.POLI_KEY, real);
    }
  } catch (e) { }
})();
