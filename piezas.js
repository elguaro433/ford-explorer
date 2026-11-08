// Piezas del Ford Explorer C9389 vistas en foto, con la referencia que llevan puestas.
// e = estado: "ok" (referencia leída en la pieza), "nueva" (puesta por mí), "comprobar" (no se lee: lo que sale de investigar).
// z = zona. f = foto (dentro de docs/). rp = nombre de la ficha en Repuestos (si la hay).
window.PIEZAS = [
  // ---- Motor ----
  { z: "Motor", n: "Válvula EGR", ref: "Ford F37E-9D475-C2A", e: "ok", f: "04 Mantenimiento/2026-11-08 Valvula EGR Ford F37E-9D475-C2A.jpg", rp: "Válvula EGR",
    nota: "Recambio de Ford: F37Z-9D475-C." },
  { z: "Motor", n: "Sensor de presión de la EGR (DPFE)", ref: "Ford F48E-9J460-BB", e: "ok", f: "04 Mantenimiento/2026-11-08 Sensor presion EGR Ford F48E-9J460-BB.jpg", rp: "Sensor de presión de la EGR (DPFE)",
    nota: "Equivalente NRF 708049." },
  { z: "Motor", n: "Correa del motor", ref: "Continental 6PK2215", e: "ok", f: "04 Mantenimiento/2026-11-08 Correa motor Continental 6PK2215.jpg", rp: "Correa del motor (alternador, bomba, aire)",
    nota: "6 canales, 2.215 mm. Hecha en Alemania: ya se cambió alguna vez." },
  { z: "Motor", n: "Cuerpo de mariposa", ref: "Etiqueta 95TF-…-FB · JD · 3", e: "ok", f: "04 Mantenimiento/2026-11-08 Cuerpo de mariposa (etiqueta realzada 95TF FB JD 3).png", rp: "Cuerpo de mariposa",
    nota: "Leída con la foto realzada. Se vende como «95TF-FB» para Explorer 4.0 de 1995-97; el recambio de Ford es la F5TZ-9E926-EB (probable)." },
  { z: "Motor", n: "Colector de admisión", ref: "«4.0 EFI»", e: "ok", f: "04 Mantenimiento/2026-11-08 Colector admision 4.0 EFI.jpg",
    nota: "Motor 4.0 V6 OHV de inyección." },
  { z: "Motor", n: "Tapón del radiador", ref: "Motorcraft RS-76 · 16 lbs", e: "ok", f: "04 Mantenimiento/2026-11-08 Tapon radiador Motorcraft RS-76 16 lbs.jpg", rp: "Tapón del radiador",
    nota: "1,1 bar. No abrir en caliente." },
  { z: "Motor", n: "Bujía (la vieja)", ref: "NGK Iridium TR55IX", e: "ok", f: "04 Mantenimiento/2026-11-07 Bujia vieja NGK TR55IX.jpg", rp: "Bujías",
    nota: "Compradas las Motorcraft SP-486 originales para cambiar las 6." },
  { z: "Motor", n: "Tapón del cárter", ref: "Con goma y arandela de cobre", e: "ok", f: "04 Mantenimiento/2026-11-07 Tapon carter con goma y arandela.jpg", rp: "Tapón del cárter",
    nota: "Comprado el nuevo F6TZ-6730-BA." },

  // ---- Filtros y líquidos ----
  { z: "Filtros y líquidos", n: "Filtro de aire", ref: "Motorcraft FA-1616", e: "ok", f: "04 Mantenimiento/2026-11-07 Filtro aire viejo Motorcraft FA-1616.jpg", rp: "Filtro de aire",
    nota: "Muy sucio. Comprado uno nuevo igual." },
  { z: "Filtros y líquidos", n: "Filtro de gasolina", ref: "Motorcraft FG-872", e: "ok", f: "04 Mantenimiento/2026-11-07 Filtro gasolina original Motorcraft FG-872.jpg", rp: "Filtro de gasolina",
    nota: "Comprado el Mecafilter ELE6014, que es equivalente." },
  { z: "Filtros y líquidos", n: "Refrigerante", ref: "AD Plus orgánico 50 % · ref. 15505", e: "nueva", f: "04 Mantenimiento/2026-11-07 Refrigerante AD Plus organico.jpg", rp: "Refrigerante (anticongelante)",
    nota: "Puesto el 07/11/2026. Rosa, hasta −40 °C." },

  // ---- Frenos ----
  { z: "Frenos", n: "Servofreno", ref: "Bendix · Ford F57A-2B559-GC", e: "ok", f: "04 Mantenimiento/2026-11-08 Servofreno Bendix F57A-2B559-GC.jpg", rp: "Servofreno",
    nota: "AlliedSignal · 7E5270C30308 · 850096." },
  { z: "Frenos", n: "Grupo del ABS", ref: "Ford F57A-AE · ATE 25.0202-0020.4", e: "ok", f: "04 Mantenimiento/2026-11-08 Grupo ABS Ford F57A-AE ATE 25.0202-0020.4.jpg", rp: "Grupo hidráulico del ABS",
    nota: "Código de barras 52005002001151 93." },

  // ---- Electricidad ----
  { z: "Electricidad", n: "Relé de arranque", ref: "Ford E9TZ-11450-B = Motorcraft SW-1951-C", e: "comprobar", f: "04 Mantenimiento/2026-11-08 Rele de arranque (solenoide aleta).jpg", rp: "Relé de arranque (en la aleta)",
    nota: "El número no se ve, pero la forma y el aviso grabado de Ford coinciden con el original de estos años." },
  { z: "Electricidad", n: "Caja de fusibles del motor", ref: "14 grandes + 7 pequeños", e: "ok", f: "04 Mantenimiento/2026-11-08 Caja fusibles motor completa.jpg",
    nota: "Hay 1 fusible de 30 A más y 1 de 20 A menos que en la lista del manual. Mira el dibujo de la tapa antes de cambiar uno." },
  { z: "Electricidad", n: "Relés de la caja del motor", ref: "F0AB-14B192-AA · F57B-14B192-AA", e: "ok", f: "04 Mantenimiento/2026-11-08 Caja fusibles motor - reles (detalle).jpg", rp: "Relés de la caja del motor",
    nota: "3 grandes y 3 pequeños, más 2 diodos." },
  { z: "Electricidad", n: "Relé suelto (zócalo rojo)", ref: "Ford F0AB-14B192-AA", e: "comprobar", f: "04 Mantenimiento/2026-11-08 Rele suelto F0AB-14B192-AA (zocalo rojo).jpg", rp: "Relés de la caja del motor",
    nota: "No se sabe qué manda. Por el sitio puede ser uno auxiliar (remolque o luces). Es igual que los grandes de la caja." },

  { z: "Electricidad", n: "Luz de la puerta delantera (buena)", ref: "GE 168 = W5W (T10)", e: "ok", f: "04 Mantenimiento/2026-11-08 Bombilla puerta GE 168 (buena).webp", rp: "Luz de las puertas",
    nota: "Cuña de cristal, unos 5 W." },
  { z: "Electricidad", n: "Luz de la puerta delantera (fundida)", ref: "GE 168 = W5W (T10)", e: "comprobar", f: "04 Mantenimiento/2026-11-08 Bombilla puerta fundida (negra).webp", rp: "Luz de las puertas",
    nota: "Cristal negro: está fundida. Se cambia por una W5W LED blanca." },

  // ---- Carrocería y etiquetas ----
  { z: "Carrocería", n: "Amortiguadores del capó", ref: "eBay 405990031235", e: "nueva", f: "04 Mantenimiento/2026-11-07 Amortiguadores capo puestos.jpg", rp: "Amortiguadores del capó",
    nota: "Puestos el 07/11/2026." },
  { z: "Carrocería", n: "Etiqueta de homologaciones", ref: "Ford F57D-7803050-AA", e: "ok", f: "04 Mantenimiento/2026-11-08 Etiqueta homologaciones Ford F57D-7803050-AA.jpg",
    nota: "Homologaciones europeas (E9 y E13): confirma la versión europea." },
  { z: "Carrocería", n: "Calcomanía del aceite", ref: "07/11/2026 · 117.661 km", e: "nueva", f: "04 Mantenimiento/2026-11-08 Calcomania revision puesta.jpg",
    nota: "Próximo cambio a 127.661 km o en 11/2027." },
  { z: "Carrocería", n: "Motor lavado", ref: "08/11/2026", e: "nueva", f: "04 Mantenimiento/2026-11-08 Motor lavado.jpg",
    nota: "Con el motor limpio es fácil ver si aparece una fuga nueva." }
];
