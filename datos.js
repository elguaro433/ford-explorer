// Datos del Ford Explorer C9389.
// Todo sale de los papeles del coche. Lo dudoso lleva "(?)".
// Para añadir algo nuevo de forma permanente, edita este archivo (o pídeselo a Claude).

window.DATOS = {
  actualizado: "2026-10-23",

  // Mi compra. Sin teléfonos: la web es pública.
  compra: {
    resumen: [
      ["Comprado a", "Vitor R. (Wallapop, 4,9 ★ con 127 valoraciones)"],
      ["Precio", "4.500 €, pagado entero"],
      ["Kilómetros al comprarlo", "117.514 km"],
      ["A mi nombre desde", "23/10/2026"]
    ],
    anuncio: {
      url: "https://es.wallapop.com/item/ford-explorer-4-0-v6-automatico-976924516",
      foto: "07 Compra/Wallapop anuncio 976924516.webp",
      titulo: "Ford Explorer, 4.0 V6, automático",
      texto: "«Ford Explorer, 4.0 V6, año 95, automático, 118 mil kms, todo al día.» · Buen estado · Andorra la Vella · 4.500 €"
    },
    pasos: [
      ["2024-07-21", "Primer mensaje en Wallapop", "Pregunto si es 4x4 y de qué año es. Nos pasamos los teléfonos."],
      ["2026-09-02", "Vuelvo a escribir a Vitor", "Seguimos hablando por teléfono."],
      ["2026-10-12", "Vitor pasa la ITV", "Favorable, con un defecto leve (fuga en la transmisión)."],
      ["2026-10-13", "Paga y señal", "1.500 € en efectivo."],
      ["2026-10-15", "Seguro a mi nombre", "Multisegur, hasta el 15/10/2027."],
      ["2026-10-21", "Pagos a cuenta", "500 € por Bizum y 2.000 € en efectivo. Recibo firmado por los dos."],
      ["2026-10-22", "Pago final", "500 €. Coche pagado entero."],
      ["2026-10-23", "Traspaso hecho", "Registre de Vehicles: el coche ya está a mi nombre. Pagado 40 €."],
      ["2026-10-23", "Impuesto 2026", "Lo pagó el dueño anterior en el traspaso (169,50 € + 3,39 de recargo). Desde 2027 lo pago yo: 169,50 € cada marzo, domiciliado en MoraBanc."],
      ["2026-10-23", "Seguro pagado", "Multisegur, póliza 10043515: 340,26 € (en 3 cuotas). Cubre hasta el 30/09/2027."]
    ],
    pagos: [
      ["2026-10-13", "Paga y señal (efectivo)", 1500],
      ["2026-10-21", "Bizum", 500],
      ["2026-10-21", "Efectivo", 2000],
      ["2026-10-22", "Pago final", 500]
    ]
  },

  // Seguro en vigor (lo usa el botón de accidente)
  seguro: { compania: "Multisegur Assegurances", poliza: "10043515", desde: "2026-10-23", hasta: "2027-09-30", agente: "Assega (Francesc Sega)" },

  // Teléfonos de interés. [grupo, quién, número, nota]
  telefonos: [
    ["Urgencias", "Emergencias (Andorra y toda Europa)", "112", "Accidente con heridos, fuego, peligro"],
    ["Urgencias", "Policía de Andorra", "110", "Accidente sin heridos, robo, tráfico"],
    ["Urgencias", "Urgencias médicas (SUM)", "116", "Ambulancia en Andorra"],
    ["Urgencias", "Bomberos de Andorra", "118", ""],
    ["Si el coche se para", "Asistencia Multisegur en Andorra", "+376 860 366", "Grúa, avería, pinchazo, batería. Si no contesta: +376 321 432"],
    ["Si el coche se para", "Asistencia Multisegur fuera de Andorra", "+34 933 001 050", "España, Francia y resto de Europa"],
    ["Seguro", "Multisegur (oficina y partes)", "+376 808 808", "Póliza 10043515 · WhatsApp +376 626 808"],
    ["Talleres Ford", "Ford Andorra · Auto Selecció", "+376 803 811", "C/ Dr. Vilanova 5, Andorra la Vella"],
    ["Talleres Ford", "Ford La Seu d'Urgell · Tallers Valira", "+34 973 351 258", "Ctra. de Lleida a Puigcerdà s/n · L-V 9-13 y 15-19, sáb 9-12"]
  ],

  // [dato, valor, grupo]
  ficha: [
    ["Modelo", "Ford Explorer XLT 4x4, 4 puertas", "Origen"],
    ["Color", "Verde", "Origen"],
    ["Fabricado", "1995 (año modelo 1996) en Louisville, EE. UU.", "Origen"],
    ["Vendido nuevo", "Servel Motor S.L., Lleida (España), 13/12/1995", "Origen"],
    ["Matrícula original", "L-2825-Z (España)", "Origen"],
    ["Matrícula actual", "C9389 (Andorra, desde el 12/06/1997)", "Origen"],
    ["Bastidor (VIN)", "1FMDU34X4TUA80751", "Origen"],
    ["Homologación europea", "e11*93/81*0029*00", "Origen"],
    ["Motor", "4.0 L V6 gasolina · 3.958 cc · inyección electrónica", "Datos técnicos"],
    ["Potencia fiscal", "22,67 CV", "Datos técnicos"],
    ["Cambio", "Automático de 5 marchas con overdrive", "Datos técnicos"],
    ["Tracción", "4x4 (AUTO / HIGH / LOW)", "Datos técnicos"],
    ["Plazas", "5", "Datos técnicos"],
    ["Peso en vacío", "2.150 kg", "Datos técnicos"],
    ["Peso máximo", "2.522 kg", "Datos técnicos"],
    ["Peso máximo con remolque", "4.902 kg", "Datos técnicos"],
    ["Peso máximo por eje", "1.270 kg delante · 1.361 kg detrás", "Datos técnicos"],
    ["Medidas", "Largo 4.789 · ancho 1.874 · alto 1.830 mm", "Datos técnicos"],
    ["Distancia entre ejes", "2.831 mm", "Datos técnicos"],
    ["Neumáticos", "P225/70 R16 · 2,1 bar delante y detrás", "Datos técnicos"],
    ["Rueda de repuesto", "225/70 R15 · 2,1 bar · máx. 80 km/h", "Datos técnicos"],
    ["Par de apriete de ruedas", "135 Nm", "Datos técnicos"],
    ["Depósito de gasolina", "83,3 litros", "Líquidos y capacidades"],
    ["Gasolina", "Sin plomo 95 (mínimo 91)", "Líquidos y capacidades"],
    ["Aceite del motor", "5W-30 (o 10W-40) · 4,7 L con filtro · filtro Motorcraft FL-1A", "Líquidos y capacidades"],
    ["Aceite del cambio automático", "ATF Mercon · 9,25 L", "Líquidos y capacidades"],
    ["Caja transfer", "ATF Mercon · 1,4 L", "Líquidos y capacidades"],
    ["Eje delantero / trasero", "1,7 L / 2,6 L (el trasero con aditivo autoblocante)", "Líquidos y capacidades"],
    ["Refrigerante", "7,4 L · 50 % agua y 50 % anticongelante", "Líquidos y capacidades"],
    ["Líquido de frenos", "DOT 4", "Líquidos y capacidades"],
    ["Bombilla de los faros", "H4 60/55 W", "Líquidos y capacidades"]
  ],

  // Valores que usan las alertas
  estado: {
    kmActual: 117514, kmFecha: "2026-10-15",
    proximaITV: "2027-01-31",
    ultimoAceite: { fecha: "2021-03-31", km: 80082, proximoKm: 90082 },
    seguroHasta: "2027-09-30",
    titularPermiso: "Emmanuel [nombre] (traspaso 23/10/2026)",
    pagadorITV2026: "[vendedor]"
  },

  propietarios: [
    ["1995-12-13", "Sr. [primer dueño] (?) — [dirección], Vilanova de la Barca (Lleida)", "Primer dueño. Vendido por Servel Motor S.L., Lleida"],
    ["1997-06-12", "Pasa a Andorra con matrícula C9389", "Permiso"],
    ["2022-12-25", "[dueño anterior] — Encamp", "Tomador del seguro 2022–2023"],
    ["2023-09-18", "[dueño anterior] — Ordino", "Titular en el permiso"],
    ["2026-10-12", "[vendedor] — Andorra la Vella (NIA/NRT [NIA], doc. [doc])", "Pagó la ITV 2026 y es quien te vende el coche. Falta confirmar si la carta groga está a su nombre"],
    ["2026-10-23", "Emmanuel [nombre] (NIA [NIA]) — Av. [dirección], Andorra la Vella", "Titular desde el 23/10/2026 (traspaso hecho en el Registre de Vehicles)"]
  ],

  // tipo: itv | mant | seguro | doc
  historial: [
    { f: "1995-12-13", km: null,   tipo: "doc",  t: "Matriculado nuevo en Lleida (L-2825-Z)", d: "Concesionario Servel Motor S.L., Av. Garrigues 68, Lleida." },
    { f: "1996-03-04", km: 3165,   tipo: "mant", t: "Primera revisión (2.500 km)", d: "Servel Motor, Lleida. Sellado." },
    { f: "1996-08-05", km: 10400,  tipo: "mant", t: "Revisión intermedia (10.000 km)", d: "Servel Motor, Lleida. Uso normal. Sellado." },
    { f: "1997-01-02", km: 19284,  tipo: "mant", t: "Revisión normal (20.000 km)", d: "Servel Motor, Lleida. Uso normal. Sellado." },
    { f: "1997-06-12", km: null,   tipo: "doc",  t: "Matriculado en Andorra (C9389)", d: "" },
    { f: "1997-10-01", km: 34737,  tipo: "mant", t: "Revisión 30.000 km «alto kilometraje»", d: "Aceite Motul 6100, filtro de aceite cambiado, nivel puente trasero. Sin sello, solo firma." },
    { f: "1998-01-13", km: 36290,  tipo: "mant", t: "Cambio de aceite (km aprox.)", d: "Etiqueta Motul. Niveles de caja y puente revisados. Letra difícil (?)" },
    { f: "2004-06-17", km: 50480,  tipo: "mant", t: "Aceite dirección asistida y niveles (km aprox.)", d: "Nota a mano bajo el capó: «oli servo… i de nivells» (?)" },
    { f: "2007-01-04", km: 52554,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2008-01-24", km: 52901,  tipo: "itv",  t: "ITV DESFAVORABLE", d: "No consta el motivo. Repetida el mismo día." },
    { f: "2008-01-24", km: 52911,  tipo: "itv",  t: "ITV Favorable (repetición)", d: "" },
    { f: "2009-01-03", km: 53141,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2010-01-26", km: 53815,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2011-01-11", km: 56073,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2012-01-16", km: 56632,  tipo: "itv",  t: "ITV CONDICIONAL", d: "No consta el motivo." },
    { f: "2012-01-17", km: 56646,  tipo: "itv",  t: "ITV Favorable (repetición)", d: "" },
    { f: "2013-01-03", km: 58110,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2014-01-08", km: 58579,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2015-01-15", km: 59685,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2016-01-11", km: 60744,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2017-01-09", km: 61156,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2018-01-19", km: 61587,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2018-12-13", km: 61996,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2020-01-09", km: 73075,  tipo: "itv",  t: "ITV CONDICIONAL", d: "No consta el motivo." },
    { f: "2020-01-21", km: 73276,  tipo: "itv",  t: "ITV Favorable (repetición)", d: "" },
    { f: "2020-12-16", km: 78145,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2021-03-31", km: 80082,  tipo: "mant", t: "Cambio de aceite 10W40", d: "Filtro de aceite NO, filtro de aire NO. Próximo a 90.082 km." },
    { f: "2021-12-22", km: 89436,  tipo: "itv",  t: "ITV Favorable", d: "" },
    { f: "2022-12-25", km: null,   tipo: "seguro", t: "Seguro Financera FINAUTO (semestre)", d: "Póliza [póliza] · 240,52 € · hasta 25/06/2023 · [dueño anterior]." },
    { f: "2023-06-01", km: 116781, tipo: "itv",  t: "ITV Favorable, sin defectos", d: "Informe AND100001022426. Próxima 31/01/2024 (no se hizo)." },
    { f: "2023-09-18", km: null,   tipo: "doc",  t: "Permiso de circulación nuevo", d: "Titular: [dueño anterior] (Ordino)." },
    { f: "2026-10-13", km: null,   tipo: "doc",  t: "Compra: paga y señal 1.500 € (efectivo)", d: "Vendedor [vendedor] (doc. [doc], tel. [tel]). Precio total 4.500 €." },
    { f: "2026-10-21", km: 118000, tipo: "doc",  t: "Compra: pagos a cuenta 500 € (Bizum) + 2.000 € (efectivo)", d: "Total pagado 4.000 €. Pendiente 500 €. Recibo firmado por los dos por duplicado." },
    { f: "2026-10-22", km: null,   tipo: "mant", t: "Pedidos amortiguadores de gas del capó (2 uds.)", d: "Los actuales están mal. eBay, pedido [pedido], vendedor abijyide-automotive, «2 Stück für 1995-2001 Ford Explorer Gasfeder Motorhaube». 15,99 € artículo, 36,51 € total. Llega el lun. 2/11/2026. Devolución hasta el 2/12/2026." },
    { f: "2026-10-22", km: null,   tipo: "doc",  t: "Revisado el mando: original Bosch RK112, pila A23 12 V", d: "Solo hay una llave y un mando. El mando es el homologado para este coche (G108 511D)." },
    { f: "2026-10-22", km: null,   tipo: "doc",  t: "Compra: pago final 500 € — PAGADO ENTERO (4.500 €)", d: "Coche pagado del todo. Traspaso en el Govern el 23/10/2026." },
    { f: "2026-10-15", km: 117514, tipo: "doc",  t: "Foto del cuentakilómetros: 117.514 km", d: "Vídeo del 15/10/2026 a las 18:50. Parcial 207 km. Cuadro en km/h (versión europea). Motor al ralentí (unas 1.000 rpm), en P, frío y con el depósito casi en reserva." },
    { f: "2026-10-15", km: null,   tipo: "seguro", t: "Seguro nuevo Multisegur Assegurances", d: "A nombre de Emmanuel [nombre]. Responsabilidad civil hasta 50.000.000 €. Del 15/10/2026 al 15/10/2027. Certificado FAGA nº [nº]." },
    { f: "2026-10-22", km: null,   tipo: "doc",  t: "Solicitud de compraventa R2T003 preparada (borrador)", d: "Comprador: Emmanuel [nombre]. Faltan los datos y la firma del vendedor." },
    { f: "2026-10-23", km: null,   tipo: "doc",  t: "Traspaso hecho: el coche ya está a mi nombre", d: "Registre de Vehicles del Govern d'Andorra. Pagado 40 €." },
    { f: "2026-10-23", km: null,   tipo: "seguro", t: "Seguro pagado: Multisegur, póliza 10043515", d: "340,26 € (en 3 cuotas: 30/10, 30/11 y 30/12). Cubre del 23/10/2026 al 30/09/2027." },
    { f: "2026-10-12", km: 117496, tipo: "itv",  t: "ITV Favorable con defecto LEVE", d: "8.1.7.1 Fuga en cárteres de la transmisión. Tarifa fuera de plazo 49,10 €. Con placas de prueba 435. Freno delantero 10 % descompensado." }
  ],

  documentos: [
    ["Permiso de circulación (carta amarilla)", "01 Documentacion/2023-09-18 Permiso de circulacion C9389.jpg"],
    ["Permiso — ficha completa", "01 Documentacion/Permiso de circulacion - ficha completa.md"],
    ["Certificado del propietario 1995", "01 Documentacion/1995-12-13 Certificado del propietario (Espana L-2825-Z).jpg"],
    ["Placa del fabricante + aceite 2021", "01 Documentacion/Placa del fabricante + etiqueta aceite 2021.jpg"],
    ["Seguro actual Multisegur 2026–2027 (PDF)", "02 Seguro/2026-10-15 Certificado seguro Multisegur (FAGA) hasta 2027-10-15.pdf"],
    ["Solicitud compraventa R2T003 (borrador)", "01 Documentacion/2026-10-22 Solicitud compraventa R2T003 (borrador).pdf"],
    ["Cambio de titular — lista para mañana", "Cambio de titular - lista para mañana.md"],
    ["Recibo seguro 2022–2023", "02 Seguro/2023-05-31 Recibo seguro Financera 2022-12 a 2023-06.jpg"],
    ["Cargo banco seguro", "02 Seguro/2022-12-27 Cargo banco seguro Credit Andorra.jpg"],
    ["ITV 2023 + 2026 + factura (PDF)", "03 ITV/2026-10-12 ITV informes 2023 y 2026 + factura.pdf"],
    ["Análisis ITV", "03 ITV/Analisis ITV.md"],
    ["Hoja de revisiones Ford 1996–97", "04 Mantenimiento/1996-1997 Hoja de revisiones Ford.jpg"],
    ["Etiquetas Motul 1997–98", "04 Mantenimiento/1997-1998 Etiquetas aceite Motul.jpg"],
    ["Nota aceite 2004", "04 Mantenimiento/2004-06-17 Nota aceite y niveles.jpg"],
    ["Historial completo", "Historial del vehiculo.md"],
    ["Manual del propietario — índice", "01 Documentacion/Manuales Ford 1995/Manual del propietario - indice.jpg"],
    ["Manual — guía estación de servicio (gasolina, aceite, neumáticos)", "01 Documentacion/Manuales Ford 1995/Manual del propietario - contraportada guia estacion de servicio.jpg"],
    ["Manual — pág. 23 mando y alarma", "01 Documentacion/Manuales Ford 1995/Manual del propietario - pag 23 mando y alarma.jpg"],
    ["Programa de mantenimiento — portada", "01 Documentacion/Manuales Ford 1995/Programa de mantenimiento - portada.jpg"]
  ],

  pendientes: [
    { id: "segundaLlave", t: "Hacer 2.ª llave y 2.º mando (sin mando no arranca)" },
    { id: "aceite", t: "Cambiar aceite, filtro de aceite y filtro de aire" },
    { id: "fuga", t: "Reparar la fuga de la transmisión (defecto de la ITV)" },
    { id: "liqfrenos", t: "Cambiar líquido de frenos y revisar freno delantero derecho" },
    { id: "refrigerante", t: "Cambiar el refrigerante y revisar el tapón del radiador" },
    { id: "niveles4x4", t: "Revisar aceite del cambio, transfer y diferenciales" },
    { id: "amortiguadores", t: "Poner los amortiguadores del capó (llegan el 2/11)" },
    { id: "parado", t: "Revisar batería y edad de los neumáticos" },
    { id: "pilaMando", t: "Comprar pila de repuesto A23 12 V para el mando" },
    { id: "airbag", t: "Preguntar en el taller por el airbag (tiene 31 años)" },
    { id: "cartanueva", t: "Hacer foto de la carta groga nueva a mi nombre" },
    { id: "itv2027", t: "Pasar la ITV antes del 31/01/2027" }
  ],

  // Problemas y soluciones: todo sacado del manual del propietario (pág. = página de tu libro)
  fallos: [
    { s: "El coche se para tras un golpe y no arranca", p: "90",
      c: ["Es el corte de gasolina de seguridad.", "Busca el botón bajo el salpicadero, en el lado del acompañante (arriba a la derecha del hueco de los pies).", "Si huele a gasolina, NO lo toques.", "Si no hay fugas: llave en A, aprieta el botón, llave en C unos segundos y vuelve a B. Ya arranca."] },
    { s: "No arranca y la luz de la llave parpadea", p: "25",
      c: ["Es el inmovilizador: se pone solo 1 minuto después de apagar el coche.", "Pon la llave en C y pulsa UNA vez el botón del mando.", "Arranca antes de 2 minutos; si no, se vuelve a bloquear."] },
    { s: "El motor no arranca", p: "59-61",
      c: ["La palanca tiene que estar en P o N.", "En frío: pisa el freno y arranca SIN tocar el acelerador.", "No tengas la llave girada más de 5 segundos. Si no arranca, espera y repite.", "Tras 3 intentos, espera 10 segundos y arranca con el acelerador pisado a fondo (motor ahogado)."] },
    { s: "Batería descargada", p: "89",
      c: ["Cable rojo: + de tu batería con + de la otra.", "Cable negro: − de la otra batería con una parte metálica de TU motor (no con tu batería).", "Arranca el otro coche, luego el tuyo. Déjalos 3 minutos unidos.", "Quita primero el negro y después el rojo."] },
    { s: "La palanca no sale de P", p: "30",
      c: ["Apaga el motor y quita la llave.", "Pon el freno de mano.", "Llave en B, pisa el freno y pon N. Arranca.", "Puede ser un fusible fundido de las luces de freno: cámbialo."] },
    { s: "La aguja de temperatura sube hacia la H", p: "6, 81",
      c: ["Para el motor.", "NO abras el tapón del refrigerante en caliente.", "Con el motor frío, mira el nivel: un poco por encima de COLD FILL.", "Rellena con 50 % agua y 50 % anticongelante. No sigas hasta saber la causa."] },
    { s: "Se enciende la luz de frenos (!)", p: "8, 80",
      c: ["Mira que el freno de mano esté quitado.", "Si sigue encendida: falta líquido de frenos. Rellena hasta MAX con DOT 4.", "Llévalo al taller. Frenará más largo."] },
    { s: "Se encienden ABS y frenos a la vez", p: "9",
      c: ["Para en cuanto puedas sin peligro.", "No sigas hasta que el taller revise los frenos."] },
    { s: "Se enciende la luz de batería conduciendo", p: "9",
      c: ["El alternador no carga.", "Apaga todo lo que no necesites (radio, aire, luneta).", "Ve al taller cuanto antes."] },
    { s: "La presión de aceite marca baja", p: "11, 78",
      c: ["Para y mira el nivel de aceite con la varilla.", "Si falta, rellena hasta MAX (nunca más).", "Si el nivel está bien y sigue baja: NO conduzcas, taller."] },
    { s: "Se enciende la luz del motor", p: "13, 91",
      c: ["La electrónica del motor ha visto un fallo.", "Puedes seguir con cuidado, pero ve al taller.", "Si va sin fuerza (máx. 60 km/h), es modo de emergencia: taller directo."] },
    { s: "Se enciende CHECK GAUGE", p: "7",
      c: ["Mira los relojes: temperatura alta, presión de aceite baja o depósito casi vacío.", "Actúa según el que esté mal."] },
    { s: "La luz del airbag no se apaga o pita 5 veces", p: "9, 58",
      c: ["El airbag tiene un fallo y puede no funcionar.", "Llévalo al taller."] },
    { s: "El intermitente parpadea muy rápido", p: "9",
      c: ["Hay una bombilla de intermitente fundida (21 W delante y detrás, 5 W lateral)."] },
    { s: "El mando no abre", p: "23",
      c: ["Cambia la pila: A23 de 12 V (tornillo de estrella detrás).", "Cerca de emisoras de radioaficionados el mando falla: abre con la llave.", "Con la alarma puesta, abrir con la llave hace sonar la alarma: apágala con el mando."] },
    { s: "Rueda pinchada", p: "94-99",
      c: ["Aparta el coche, freno de mano, palanca en P y calza la rueda contraria.", "Saca el gato, los guantes y la llave de ruedas: están detrás del panel izquierdo del maletero (dibujo 1).", "Saca las 2 varillas: están en el suelo, detrás de los asientos traseros. Mete una en la llave de ruedas y tendrás la manivela (dibujo 2).", "La rueda de repuesto va colgada debajo del coche, detrás. Quita el tornillo de mariposa y aparta la barra del soporte (dibujo 3).", "Abre el portón, mete la manivela por el agujero de encima del parachoques y gira a la izquierda: la rueda baja con un cable (dibujo 4).", "Afloja un poco las tuercas y pon el gato solo delante bajo el amortiguador o detrás bajo el eje (dibujo 5). Sube la rueda como mucho 3 cm.", "Cambia la rueda y aprieta las tuercas en cruz, en el orden 1-2-3-4-5, a 135 Nm (dibujo 6).", "Con la de repuesto, máximo 80 km/h. Vuelve a apretar las tuercas a los 800 km."] },
    { s: "No funciona algo eléctrico", p: "104-107",
      c: ["Mira el fusible: hay una caja en el motor (delante izquierda) y otra dentro (lateral izquierdo del salpicadero).", "Cámbialo por uno del mismo amperaje. Hay 5 de repuesto en la tapa de la caja de dentro.", "Ejemplos (caja de dentro): radio 29, mechero 17, intermitentes 22, luces de freno 13, limpiaparabrisas 16."] },
    { s: "Hay que remolcar el coche", p: "92-93",
      c: ["Mejor en grúa o plataforma.", "Si lo remolcan por el suelo: llave en C, palanca en N, máximo 80 km/h.", "No arranca empujando."] },
    { s: "Se empañan los cristales", p: "37",
      c: ["Temperatura a la derecha, mando en desempañar y ventilador fuerte.", "El aire acondicionado se enciende solo para secar el aire: es normal."] },
    { s: "Charco de agua debajo del coche", p: "39",
      c: ["Si es agua clara y tenías el aire acondicionado puesto, es normal."] }
  ],

  // Preguntas frecuentes: respuestas cortas sacadas del manual
  faq: [
    ["¿Qué gasolina le pongo?", "Sin plomo de 95 (mínimo 91). Nunca con plomo. Caben 83,3 L. (pág. 113)"],
    ["¿Qué aceite lleva el motor?", "5W-30 (o 10W-30, 10W-40, 5W-40). Con filtro caben 4,7 L. Nunca por encima de MAX. (pág. 114-115)"],
    ["¿Cómo miro el aceite?", "Coche en llano, motor caliente y apagado unos minutos. Saca la varilla, límpiala, métela y sácala: tiene que estar entre MIN y MAX. (pág. 78)"],
    ["¿Qué presión llevan las ruedas?", "2,1 bar delante, detrás y en la de repuesto, en frío. (pág. 116)"],
    ["¿Qué líquido de frenos lleva?", "DOT 4. Se cambia cada 3 años. (pág. 115)"],
    ["¿Qué refrigerante lleva?", "50 % agua y 50 % anticongelante. Se cambia cada 2 años. (pág. 115)"],
    ["¿Qué reviso al echar gasolina?", "Aceite, líquido de frenos, agua del limpiaparabrisas y presión de las ruedas. (pág. 75)"],
    ["¿Cómo abro el capó?", "Tira de la manilla de debajo del volante y empuja hacia la izquierda la palanca de detrás de la rejilla. (pág. 76)"],
    ["¿Cómo uso el 4x4?", "AUTO para todo lo normal. HIGH para nieve o campo. LOW solo para terreno muy difícil: para, pisa el freno y pon N antes de cambiar a LOW. (pág. 31-32)"],
    ["¿Qué es el botón O/D OFF de la palanca?", "Quita la 5.ª marcha. Útil en cuestas o con remolque. Al volver a arrancar se activa sola. (pág. 29)"],
    ["¿Cómo pongo la alarma?", "Quita la llave, cierra todo y pulsa el mando. Con el botón de la puerta NO se pone la alarma. (pág. 23-24)"],
    ["¿Cómo activo la alarma de pánico?", "Mantén pulsado el mando 3 segundos. Para pararla, otros 3 segundos. (pág. 23)"],
    ["¿Qué pila lleva el mando?", "A23 de 12 V. Cámbiala cada 6 meses. (pág. 23)"],
    ["¿Cómo funciona el control de crucero?", "Botón de arriba a la izquierda del volante para encenderlo; + o − para fijar la velocidad (desde 50 km/h). Al frenar se quita. (pág. 18-19)"],
    ["¿Cómo pongo la hora?", "Con el contacto puesto: botón H para las horas y M para los minutos. (pág. 42)"],
    ["¿Cuánto peso puedo poner en el techo?", "45 kg como máximo. (pág. 72)"],
    ["¿Cuánto peso puede ir en la bola del remolque?", "100 kg como máximo. (pág. 71)"],
    ["¿Qué bombilla llevan los faros?", "H4 60/55 W. (pág. 100)"],
    ["¿Cuánto se aprietan las tuercas de las ruedas?", "135 Nm, en cruz. Vuelve a apretarlas a los 800 km. (pág. 98)"],
    ["¿Cada cuánto hay que hacerle revisión?", "Cada 10.000 km o cada 12 meses, lo que llegue antes. (Programa de mantenimiento)"]
  ],

  // Programa de mantenimiento Ford (libro original "Ford Servicio – Para todos los modelos 1995")
  planFord: {
    resumen: "Revisión cada 10.000 km o 12 meses, lo que ocurra antes, sea cual sea el uso. Primera revisión a los 2.500 km o 3 meses.",
    intermedia: "10.000 · 30.000 · 50.000 · 70.000 · 90.000 · 110.000 · 130.000 km",
    normal: "20.000 · 40.000 · 60.000 · 80.000 · 100.000 · 120.000 km",
    tareas: [
      ["Cada revisión", "Inspección general: fijación de motor, caja de cambios, eje trasero, escape, tubos y tuberías, fuelles, tirantes de suspensión y dirección, gomas del eje de transmisión, cableado y cinturones; buscar fugas, daños o desgaste"],
      ["Cada revisión", "Niveles: aceite del motor, refrigerante (concentración de anticongelante si hay pérdidas), líquido de la dirección asistida, limpiaparabrisas, electrolito de la batería"],
      ["Cada revisión", "Luces exteriores; cerradura del capó (comprobar y lubricar)"],
      ["Revisión normal (bajo el coche)", "Cambiar aceite y filtro de motor"],
      ["Revisión normal (bajo el coche)", "Desgaste de pastillas y forros (más a menudo si se conduce por montaña o en ciudad)"],
      ["Revisión normal (bajo el coche)", "Llantas y neumáticos: desgaste, estado y presión, incluida la rueda de repuesto"],
      ["Cada 3 años o 60.000 km", "Purgar y cambiar el líquido de frenos: DOT 4 (Ford SAM 6C9103-A) o Super DOT 4 (Ford ESD-M6C57-A)"],
      ["Una vez al año", "Revisar las gomas exteriores del sistema de frenos delantero y trasero (fugas, deterioro). Puede requerir desmontar pinzas y tambores"],
      ["Cada 4 años", "Examinar y limpiar el tapón de presión del radiador; cambiarlo si la junta está deteriorada"],
      ["Cada 12 meses", "Examinar los bajos y los paneles inferiores con PVC (protección anticorrosión)"]
    ],
    // Lo que te tocaría a ti ahora
    tuEstado: "Con 117.496 km le correspondería la revisión NORMAL de 120.000 km (aceite + filtro, frenos, neumáticos y todo lo de cada revisión), además del líquido de frenos y el tapón del radiador, que llevan años sin registro."
  }
};
