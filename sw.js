// Ford Explorer: funciona sin cobertura.
// Primero intenta la red (para tener siempre lo último); si no hay o tarda más de 4 s, usa lo guardado.
// Al publicar una versión nueva, sube VERSION (y el ?v= de los guiones en index.html).
const VERSION = "fe-18";
const PRECACHE = [
"./",
"index.html",
"manifest.json",
"icon-180.png",
"icon-192.png",
"icon-512.png",
"datos.js",
"manual.js",
"imagenes.js",
"botones.js",
"fusibles.js",
"archivos.js",
"img/aceite_reloj.jpg",
"img/antiniebla.jpg",
"img/apriete.jpg",
"img/bateria.jpg",
"img/cambio_varilla.jpg",
"img/capo.jpg",
"img/check_gauge.jpg",
"img/cierre_puertas.jpg",
"img/corte_gasolina.jpg",
"img/crucero.jpg",
"img/cuadro.jpg",
"img/desempanar.jpg",
"img/dim.jpg",
"img/direccion.jpg",
"img/elevalunas.jpg",
"img/enchufe.jpg",
"img/escobillas.jpg",
"img/espejos.jpg",
"img/faro.jpg",
"img/freno_mano.jpg",
"img/fus_caja_dentro.jpg",
"img/fus_caja_motor.jpg",
"img/fus_donde.jpg",
"img/fusibles_dentro.jpg",
"img/fusibles_motor.jpg",
"img/gasolina.jpg",
"img/gato.jpg",
"img/gato_guardado.jpg",
"img/gato_taller.jpg",
"img/inmovilizador.jpg",
"img/limpia_trasero.jpg",
"img/limpiaparabrisas.jpg",
"img/liquido_frenos.jpg",
"img/llave_posiciones.jpg",
"img/luces.jpg",
"img/luneta_termica.jpg",
"img/luz_4x4.jpg",
"img/luz_abs.jpg",
"img/luz_airbag.jpg",
"img/luz_bateria.jpg",
"img/luz_frenos.jpg",
"img/luz_motor.jpg",
"img/mando_4x4.jpg",
"img/mando_abrir.jpg",
"img/mando_pila.jpg",
"img/medidas.jpg",
"img/overdrive.jpg",
"img/palanca.jpg",
"img/palanca_luces.jpg",
"img/pinzas.jpg",
"img/placa_bastidor.jpg",
"img/porton.jpg",
"img/refrigerante.jpg",
"img/reloj.jpg",
"img/repuesto_manivela.jpg",
"img/repuesto_soporte.jpg",
"img/rueda_tuercas.jpg",
"img/tapon_aceite.jpg",
"img/tapon_gasolina.jpg",
"img/temperatura.jpg",
"img/vano_motor.jpg",
"img/varilla_aceite.jpg",
"img/varillas.jpg",
"img/volante.jpg",
"img/voltimetro.jpg",
"img/warning.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(PRECACHE.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    // no-cache: pregunta siempre al servidor si hay versión nueva (si no la hay, contesta rápido sin bajar nada)
    const red = fetch(req.mode === "navigate" ? new Request(req.url, { cache: "no-cache" }) : new Request(req, { cache: "no-cache" })).then(r => { if (r.ok) cache.put(req, r.clone()); return r; });
    const guardado = () => cache.match(req, { ignoreSearch: true }).then(r => r || (req.mode === "navigate" ? cache.match("./") : undefined));
    try {
      const r = await Promise.race([red, new Promise((_, no) => setTimeout(() => no("lento"), 4000))]);
      return r;
    } catch {
      const g = await guardado();
      if (g) { red.catch(() => {}); return g; }
      return red;
    }
  })());
});
