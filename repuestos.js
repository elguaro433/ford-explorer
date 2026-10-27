// Repuestos del Ford Explorer C9389 (XLT 4x4, 4.0 V6 OHV, automático, 1995/año modelo 1996, versión europea).
// ok: true = sale del manual o de varias fuentes que coinciden. ok: false = probable, COMPROBAR antes de comprar.
// q = texto que se busca en las tiendas. Para añadir uno nuevo, copia una ficha y cámbiala.

window.REPUESTOS = {
  consejos: [
    "Lo más seguro: haz una foto de la pieza vieja. Casi siempre lleva la referencia grabada o en una pegatina.",
    "En las webs elige: Ford › Explorer (U2) 1995-2001 › 4.0 V6 4x4. Si piden el bastidor: 1FMDU34X4TUA80751.",
    "El motor es el 4.0 OHV (de varillas), no el SOHC: muchas piezas cambian entre los dos.",
    "Pedidos desde España a Andorra: pagas el IGI (4,5 %) y a veces gastos de aduana. Muchos lo envían a un punto de recogida en La Seu d'Urgell.",
    "Desguaces: hay pocas Explorer de esta generación en España. Para pilotos, espejos, llantas o tapicería, sí; para frenos, filtros o motor, mejor nuevo."
  ],

  // grupo, n = nombre, cu = cuántas, ref = [[qué, valor]], ok, dif = Fácil | Media | Taller, c = consejo, q = búsqueda
  piezas: [
    // ---- Frenos (discos en las 4 ruedas) ----
    { g: "Frenos", n: "Pastillas de freno delanteras", cu: "1 juego (las 2 ruedas)", ok: true, dif: "Media",
      ref: [["Tipo", "Discos delante y detrás (las 4 ruedas)"], ["Código universal (FMSI)", "D652"]],
      c: "Cámbialas por eje, nunca solo un lado. Ruedas a 135 Nm.", q: "pastillas freno delanteras Ford Explorer 1996 4x4 D652" },
    { g: "Frenos", n: "Pastillas de freno traseras", cu: "1 juego (las 2 ruedas)", ok: true, dif: "Media",
      ref: [["Código universal (FMSI)", "D667"]],
      c: "", q: "pastillas freno traseras Ford Explorer 1996 4x4 D667" },
    { g: "Frenos", n: "Discos de freno delanteros", cu: "2", ok: true, dif: "Media",
      ref: [["Medida", "286 mm, ventilados (versión 4x4)"]],
      c: "Los de 4x4 son distintos a los de 2 ruedas: mide el tuyo. Con discos nuevos, pastillas nuevas.", q: "disco freno delantero Ford Explorer 1996 4x4 286 mm" },
    { g: "Frenos", n: "Discos de freno traseros", cu: "2", ok: false, dif: "Media",
      ref: [["Medida", "Unos 285 mm, macizos"], ["Freno de mano", "Zapatas pequeñas dentro del disco (tambor)"]],
      c: "Mide el disco viejo antes de comprar.", q: "disco freno trasero Ford Explorer 1996 4x4" },
    { g: "Frenos", n: "Líquido de frenos", cu: "1 litro", ok: true, dif: "Taller",
      ref: [["Tipo", "DOT 4 (Ford SAM 6C9103-A) o Super DOT 4"], ["Precio visto (26/10/2026)", "Castrol DOT 4 1 L: 18,36 € en Amazon.es"]],
      c: "Cada 3 años o 60.000 km. No consta ningún cambio.", q: "liquido de frenos DOT 4 1 litro" },

    // ---- Motor ----
    { g: "Motor", n: "Bujías", cu: "6", ok: true, dif: "Media",
      ref: [["Original (4.0 OHV)", "Motorcraft SP-486 o SP-486X (AGSF-42FM, platino)"], ["Separación", "1,4 mm (0,054\")"], ["Otra que vale", "NGK TR55 (n.º 3951): viene a 1,5 mm, hay que cerrarla a 1,4"], ["OJO", "La AGSF-22PP es del motor SOHC: no vale"], ["Precio visto (26/10/2026)", "6 SP-486 en eBay desde EE. UU.: unos 63 € con envío · 6 NGK TR55 en Amazon.es: 38 € (no envía a Andorra)"], ["AD Tecnomòbil (27/10/2026)", "Bosch 0242229737: 2,40 € cada una, −20 % (sin comprobar que sea equivalente a la SP-486)"]],
      c: "No hay registro de cambio desde 1995: tocan ya. Con el motor frío, una a una, para no mezclar los cables.", q: "Motorcraft SP486 bujia" },
    { g: "Motor", n: "Cables de bujías", cu: "1 juego", ok: false, dif: "Fácil",
      ref: [["Probable", "Motorcraft WR-4062 (Explorer 1991-1996)"]],
      c: "Cambia un cable cada vez: el orden importa.", q: "cables bujias Ford Explorer 1996 4.0" },
    { g: "Motor", n: "Correa del motor (alternador, bomba, aire)", cu: "1", ok: false, dif: "Media",
      ref: [["Probable", "Gates K060935 (Explorer 1996-2001)"], ["Ojo", "Cambia con o sin aire acondicionado"]],
      c: "Haz foto del dibujo de cómo va antes de quitarla (suele haber una pegatina en el frontal).", q: "correa accesorios Ford Explorer 4.0 OHV 1996" },
    { g: "Motor", n: "Termostato", cu: "1 + junta", ok: false, dif: "Media",
      ref: [["Referencia", "Sin confirmar todavía: lleva el viejo"]],
      c: "Aprovecha para cambiar el refrigerante (está en tus tareas).", q: "termostato Ford Explorer 4.0 V6 OHV" },
    { g: "Motor", n: "Batería", cu: "1", ok: true, dif: "Fácil",
      ref: [["Medida americana", "Grupo 65 (unos 306 × 190 × 192 mm)"], ["Potencia", "650 A o más"]],
      c: "Antes de comprar, mira en qué lado va el borne + de la tuya.", q: "bateria grupo 65 Ford Explorer" },

    // ---- Filtros y aceites ----
    { g: "Filtros y aceites", n: "Filtro de aceite", cu: "1", ok: true, dif: "Fácil",
      ref: [["Original", "Motorcraft FL-1A (rosca 3/4-16 UNF)"], ["En Europa", "Mahle OC 59 (8,29 € en Autodoc) o Bosch 0 451 103 357 (8,59 €)"], ["OJO", "VAICO V26-0141 no: tiene otra rosca (13/16)"], ["Aceite", "5W-30 (o 10W-40) API SN/SP · 4,7 L con filtro: compra una garrafa de 5 L"], ["AD Tecnomòbil (27/10/2026)", "Mann W940/1: 7,96 € · junta del tapón 952155: 0,47 € · Castrol 5W-30 LL 5 L: 116,37 € (caro). Todo con −20 %"]],
      c: "Está en tus tareas: el último cambio fue en 2021, y sin filtro.", q: "Mahle OC 59 filtro aceite" },
    { g: "Filtros y aceites", n: "Filtro de aire", cu: "1", ok: true, dif: "Fácil",
      ref: [["Original (1995-96, 4.0 OHV)", "Motorcraft FA-1616 (Ford F57Z-9601-A)"], ["Forma", "REDONDO, en cono (unos 17 cm de ancho y 20 de alto)"], ["En Europa", "Mahle LX 1937 o Knecht LX 1937 (19,49 € en Autodoc; equivale a F57Z-9601-A)"], ["OJO", "Mahle LX 443 y Motorcraft FA-1641 son planos: no valen para el tuyo"]],
      c: "Antes de comprar, abre la caja (unas pinzas) y mira que el viejo sea un cono. Autodoc pone el LX 1937 como «no compatible» por un fallo de su catálogo: fíate del número de Ford.", q: "Mahle LX 1937 filtro aire" },
    { g: "Filtros y aceites", n: "Filtro de gasolina", cu: "1", ok: false, dif: "Taller",
      ref: [["Probable", "Motorcraft FG-872"], ["En Europa", "Bosch 0 986 450 154 (GF 154), 15,99 € en Autodoc (para Explorer hasta 08/1996)"], ["Dónde está", "Debajo del coche, en el chasis, lado del conductor"], ["AD Tecnomòbil (27/10/2026)", "Mann WK614/46: 12,74 €, −20 %"]],
      c: "No consta ningún cambio. Hace falta una herramienta para soltar los racores y quitar presión antes. Mejor en el taller.", q: "Bosch 0 986 450 154 filtro combustible" },
    { g: "Filtros y aceites", n: "Válvula PCV (respiradero del motor)", cu: "1", ok: false, dif: "Media",
      ref: [["Probable (4.0 OHV)", "Motorcraft EV-225"], ["Dónde está", "Detrás de la tapa de balancines del lado del conductor, bajo el colector"]],
      c: "Barata y nunca se ha cambiado. El tubo de goma suele estar duro: cámbialo también si se agrieta.", q: "Motorcraft EV-225 PCV" },
    { g: "Filtros y aceites", n: "Aceite del cambio automático", cu: "9,25 L (cambio completo)", ok: true, dif: "Taller",
      ref: [["Tipo", "ATF Mercon"], ["Caja transfer", "ATF Mercon · 1,4 L"]],
      c: "", q: "aceite ATF Mercon" },

    // ---- Suspensión ----
    { g: "Suspensión", n: "Amortiguadores delanteros", cu: "2", ok: true, dif: "Taller",
      ref: [["Bilstein B6 4600", "24-021333 (4x4, sin suspensión neumática)"]],
      c: "Siempre por parejas.", q: "amortiguador delantero Ford Explorer 1996 4x4" },
    { g: "Suspensión", n: "Amortiguadores traseros", cu: "2", ok: true, dif: "Media",
      ref: [["Bilstein B6 4600", "24-021340 (4x4, sin suspensión neumática)"]],
      c: "Siempre por parejas.", q: "amortiguador trasero Ford Explorer 1996 4x4" },
    { g: "Suspensión", n: "Amortiguadores del capó", cu: "2", ok: true, dif: "Fácil",
      ref: [["Pedidos", "eBay, pedido [pedido] (llegan el 2/11)"], ["Artículo de eBay", "405990031235 · vendedor abijyide-automotive"], ["Precio", "36,51 € (15,99 + 14,18 de envío + 6,34 de impuestos)"]],
      c: "", q: "amortiguador gas capo Ford Explorer 1995-2001" },

    // ---- Limpiaparabrisas ----
    { g: "Limpiaparabrisas", n: "Escobillas delanteras", cu: "2", ok: true, dif: "Fácil",
      ref: [["Medida", "45 cm (18\") las dos"], ["Enganche", "Gancho (9×3)"]],
      c: "", q: "escobilla limpiaparabrisas 45 cm gancho" },
    { g: "Limpiaparabrisas", n: "Escobilla trasera", cu: "1", ok: false, dif: "Fácil",
      ref: [["Medida", "35 cm (14\") o 33 cm (13\"): mide la tuya"]],
      c: "", q: "escobilla trasera Ford Explorer 1995-2001" },

    // ---- Bombillas (del manual del coche, pág. de bombillas) ----
    { g: "Bombillas", n: "Faros (cruce y largas)", cu: "2", ok: true, dif: "Fácil",
      ref: [["Tipo", "H4 60/55 W"]],
      c: "No toques el cristal con los dedos. Después, revisa la altura de los faros.", q: "bombilla H4 60/55W 12V" },
    { g: "Bombillas", n: "Faros auxiliares", cu: "2", ok: true, dif: "Taller",
      ref: [["Tipo", "H1 55 W"]],
      c: "El manual dice que se cambian en el taller.", q: "bombilla H1 55W 12V" },
    { g: "Bombillas", n: "Intermitentes delanteros", cu: "2", ok: true, dif: "Fácil",
      ref: [["Según el manual", "21 W"], ["Código probable", "P21W (casquillo BA15s)"]],
      c: "Si el intermitente parpadea muy rápido, hay una fundida.", q: "bombilla P21W 12V" },
    { g: "Bombillas", n: "Luz de posición delantera", cu: "2", ok: true, dif: "Fácil",
      ref: [["Según el manual", "4 W, casquillo de cristal (sin metal)"]],
      c: "Lleva la vieja a la tienda para que te den la igual.", q: "bombilla 4W casquillo cristal 12V" },
    { g: "Bombillas", n: "Intermitentes laterales", cu: "2", ok: true, dif: "Fácil",
      ref: [["Según el manual", "5 W"], ["Código probable", "W5W (casquillo de cristal)"]],
      c: "", q: "bombilla W5W 12V" },
    { g: "Bombillas", n: "Freno y posición traseros", cu: "2", ok: true, dif: "Fácil",
      ref: [["Según el manual", "21/5 W (dos filamentos)"], ["Código", "P21/5W (casquillo BAY15d)"]],
      c: "Pilotos traseros: abre el portón, quita 2 tornillos y sale toda la tira.", q: "bombilla P21/5W 12V" },
    { g: "Bombillas", n: "Intermitentes traseros", cu: "2", ok: true, dif: "Fácil",
      ref: [["Según el manual", "21 W"], ["Código probable", "P21W"]],
      c: "", q: "bombilla P21W 12V" },
    { g: "Bombillas", n: "Marcha atrás", cu: "2", ok: true, dif: "Fácil",
      ref: [["Según el manual", "21 W"], ["Código probable", "P21W"]],
      c: "", q: "bombilla P21W 12V" },
    { g: "Bombillas", n: "Antiniebla trasera", cu: "1", ok: true, dif: "Fácil",
      ref: [["Según el manual", "21 W"], ["Código probable", "P21W"]],
      c: "", q: "bombilla P21W 12V" },
    { g: "Bombillas", n: "Matrícula", cu: "2", ok: true, dif: "Fácil",
      ref: [["Según el manual", "Tubular 5 W"], ["Código probable", "C5W (mide el largo: 36 o 41 mm)"]],
      c: "", q: "bombilla C5W 12V" },
    { g: "Bombillas", n: "Luz interior y de lectura", cu: "—", ok: true, dif: "Fácil",
      ref: [["Según el manual", "Tubular 10 W"], ["Código probable", "C10W (mide el largo)"]],
      c: "", q: "bombilla C10W 12V" },
    { g: "Bombillas", n: "Luz del maletero", cu: "1", ok: true, dif: "Fácil",
      ref: [["Según el manual", "Tubular 10 W"], ["Código probable", "C10W"]],
      c: "", q: "bombilla C10W 12V" },
    { g: "Bombillas", n: "Espejo del parasol", cu: "2", ok: true, dif: "Fácil",
      ref: [["Según el manual", "Tubular 10 W"]],
      c: "", q: "bombilla tubular 10W 12V" },
    { g: "Bombillas", n: "Luz de las puertas", cu: "Según puertas", ok: true, dif: "Fácil",
      ref: [["Según el manual", "5 W"], ["Código", "Sin confirmar: saca una y mira"]],
      c: "", q: "bombilla 5W 12V luz cortesia puerta" },

    // ---- Ruedas ----
    { g: "Ruedas", n: "Neumáticos", cu: "4 (o 2 por eje)", ok: true, dif: "Taller",
      ref: [["Los que lleva", "Cooper Discoverer AT3 4S 255/70 R16 111T (octubre de 2020)"], ["Medida de fábrica", "P225/70 R16"], ["Precio aproximado", "130-180 € cada uno, más montaje"]],
      c: "Si cambias solo 2, los nuevos van detrás. Con 4x4, mejor los 4 iguales. Cambiarlos como muy tarde en octubre de 2030 (10 años).", q: "Cooper Discoverer AT3 4S 255/70 R16 111T" },

    // ---- Llave ----
    { g: "Llave y mando", n: "Pila del mando", cu: "1", ok: true, dif: "Fácil",
      ref: [["Tipo", "A23 (MN21/23) 12 V"]],
      c: "Lleva una de repuesto: sin mando no arranca.", q: "pila A23 12V" }
  ]
};
