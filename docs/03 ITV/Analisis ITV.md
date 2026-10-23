# Análisis ITV — Ford Explorer C9389

Fuente: `2026-10-12 ITV informes 2023 y 2026 + factura.pdf` (3 páginas, escaneado).
Página 1 = factura 2026 · Página 2 = informe ITV 2023 · Página 3 = informe ITV 2026.

---

## ⚠️ Lo importante primero

1. **Próxima ITV: antes del 31/01/2027** (dentro de ~3 meses).
2. **Defecto leve pendiente:** fuga de aceite en los cárteres de la transmisión (código 8.1.7.1). Pasó la ITV, pero si empeora puede ser defecto grave en la próxima. Conviene repararlo antes de enero.
3. **La ITV estuvo caducada casi 3 años.** Vencía el 31/01/2024 y no se pasó hasta el 12/10/2026 (se saltaron las de 2024, 2025 y 2026). Por eso se cobró la tarifa «fuera de plazo» y el coche fue a la ITV con **placas de prueba nº 435**.
4. **Freno delantero algo descompensado:** diferencia izquierda/derecha del 10 % (en 2023 era del 5 %). Está dentro de lo permitido, pero conviene vigilarlo.

---

## 1. Datos del vehículo (iguales en todos los documentos)

| Campo | Valor | Comentario |
|---|---|---|
| Matrícula | C9389 | Andorra |
| Bastidor (VIN) | 1FMDU34X4TUA80751 | Dígito de control correcto (válido) |
| Marca / modelo | Ford Explorer | |
| Combustible | Gasolina | |
| Categoría | M1 (turismo) | |
| Clasificación | 01 06 Turisme | 01 = turismo; 06 = probablemente «todoterreno» |
| 1.ª matriculación | 12/06/1997 | 29 años |
| Contraseña de homologación | — | En blanco |
| Código carrocería | — | En blanco |

**Qué dice el bastidor** (decodificación estándar de Ford):
- `1` = fabricado en EE. UU. · `FM` = Ford, vehículo multiuso
- `U34` = Explorer 4 puertas **4x4**
- `X` = motor **4.0 L V6**
- `T` = **año modelo 1996** (se matriculó en 1997)
- `U` = planta de Louisville (Kentucky) · `A80751` = nº de serie

## 2. Factura 2026 (página 1)

| Campo | Valor |
|---|---|
| Emisor | ITV Serveis S.A., Ctra. de Bixessarri s/n, Aixovall, AD600 Sant Julià de Lòria · NRT A-707191-T · Tel. 741 350 |
| Nº factura | AND1FC260044196 |
| Fecha | 12/10/2026 |
| Cliente | Victor Roque · NIA/NRT 246172S · C/ Joan Maragall 4 A, 6-2, AD500 Andorra la Vella |
| Servicio | PR – Primera Inspección Periódica |
| Tarifa | **«Fora de termini»** (fuera de plazo) para vehículos L, O1, O2 y M1 |
| Base | 46,99 € |
| IGI (4,5 %) | 2,11 € |
| **Total** | **49,10 €** (cuentas comprobadas: correctas) |
| Pago | Datáfono (tarjeta) |
| Nº inspección | 1244180 |

## 3. Informe ITV 2023 (página 2)

| Campo | Valor |
|---|---|
| Nº informe | AND100001022426 |
| Distintivo (pegatina) | 12.436.408 |
| Estación / línea | AND1 / L2 (ITV Serveis, Aixovall) |
| Tipo | Primera Inspección Periódica |
| Fecha | **01/06/2023** · terminó a las 08:39 |
| Próxima | **31/01/2024** ← no se hizo |
| Tarifa | 44,55 € · liquidación AND1FC230021698 |
| Kilómetros | **116.781 km** |
| Inspector | 0059 (revisó todos los puntos) |
| Defectos | **Ninguno** («Sense defectes») |
| Resultado | **FAVORABLE** |

## 4. Informe ITV 2026 (página 3)

| Campo | Valor |
|---|---|
| Nº informe | AND100001244180 **V1** (versión corregida) |
| Distintivo (pegatina) | 12.728.195 |
| Estación / línea | AND1 / L2 |
| Tipo | Primera Inspección Periódica |
| Fecha | **12/10/2026** · terminó a las 13:43 |
| Próxima | **31/01/2027** |
| Tarifa | 49,10 € · liquidación AND1FC260044196 (= la factura) |
| Kilómetros | **117.496 km** |
| Inspectores | 0062 (puntos visuales) y 0202 (bajos: frenos, dirección, ejes, transmisión, chasis, cableado, batería, escape) |
| Defectos | **8.1.7.1 – Chasis: Transmisión. Defectos en la estanqueidad de los cárteres de la transmisión → LEVE** |
| Resultado | **FAVORABLE** |

**Observaciones (traducidas):**
- Para calcular la eficacia de los frenos no se usaron métodos de extrapolación (frase estándar).
- «Efectúa ITV con **placas de prueba 435**.» 13:43, 12/10/2026.
- «Esta inspección anula y sustituye a la inspección AND100001244180, corrigiendo valores en el AP 0062.» → El inspector 0062 corrigió algún valor y se reemitió el informe como V1. Esta es la versión válida.

## 5. Mediciones comparadas 2023 → 2026

| Medida | 2023 | 2026 | Lectura |
|---|---|---|---|
| CO a ralentí | 0,09 % | **0,00 %** | Muy bien |
| CO acelerado | 0,27 % | **0,09 %** | Mejor |
| Lambda (λ) | 1,012 | **0,999** | Ideal (1,000 es perfecto) |
| Alineación | 0,00 mm | no medida | |
| Freno servicio eje 1 (izq/der) | 3,34 / 3,51 kN | 3,32 / **2,98** kN | Desequilibrio 5 % → **10 %** |
| Freno servicio eje 2 (izq/der) | 3,34 / 3,46 kN | 3,35 / 3,17 kN | Desequilibrio 3 % → 5 % |
| Freno de estacionamiento eje 1 | 2,96 kN | 2,79 kN | |
| Freno de estacionamiento eje 2 | 1,61 kN | **2,43 kN** | Mejor |
| Opacidad, ruido, báscula, limitador | — | — | No aplica (gasolina, turismo) |

Equipos de medición (los mismos en ambas): emisiones AG013561, frenómetro FR033399. En 2023 se usó además el alineador AP023295.

## 6. Puntos revisados (sección B)

Todos los puntos aplicables están **sin defecto**, salvo 8.1 (chasis y elementos acoplados), donde está la fuga de la transmisión.
Marcados «NA» (no aplica): 1.1 reformas, 3.3 freno secundario, 3.5 desaceleración, 4.5 plato de remolque, 6.10 conexiones eléctricas de remolque, 9.2 extintores, 9.4–9.6 triángulo/botiquín/calzos, 9.9 tacógrafo, 9.10 limitador, todo el bloque 11 (autobuses) y 12 (trenes turísticos).

## 7. Historial completo de ITV (unión de ambos informes)

| Fecha | km | Resultado | km desde la anterior |
|---|---|---|---|
| 04/01/2007 | 52.554 | Favorable | — |
| 24/01/2008 | 52.901 | **Desfavorable** | 347 |
| 24/01/2008 | 52.911 | Favorable (repetida el mismo día, +10 km) | 10 |
| 03/01/2009 | 53.141 | Favorable | 230 |
| 26/01/2010 | 53.815 | Favorable | 674 |
| 11/01/2011 | 56.073 | Favorable | 2.258 |
| 16/01/2012 | 56.632 | **Condicional** | 559 |
| 17/01/2012 | 56.646 | Favorable (al día siguiente) | 14 |
| 03/01/2013 | 58.110 | Favorable | 1.464 |
| 08/01/2014 | 58.579 | Favorable | 469 |
| 15/01/2015 | 59.685 | Favorable | 1.106 |
| 11/01/2016 | 60.744 | Favorable | 1.059 |
| 09/01/2017 | 61.156 | Favorable | 412 |
| 19/01/2018 | 61.587 | Favorable | 431 |
| 13/12/2018 | 61.996 | Favorable | 409 |
| 09/01/2020 | 73.075 | **Condicional** | **11.079** |
| 21/01/2020 | 73.276 | Favorable (12 días después) | 201 |
| 16/12/2020 | 78.145 | Favorable | 4.869 |
| 22/12/2021 | 89.436 | Favorable | 11.291 |
| 01/06/2023 | 116.781 | Favorable | **27.345** |
| 12/10/2026 | 117.496 | Favorable (defecto leve) | **715** |

**Lo que se ve en el historial:**
- 2007–2018: uso muy bajo, unos 800 km/año.
- 2019–2023: el uso se dispara (11.000 → 27.000 km en 17 meses).
- 2023–2026: casi parado (715 km en 3 años y 4 meses), coincidiendo con la ITV caducada.
- El kilometraje **siempre sube**, sin retrocesos: no hay indicios de cuentakilómetros manipulado.
- La ITV de 2023 también se pasó tarde: tocaba hacia enero y se hizo en junio.
- Fallos anteriores (2008, 2012, 2020) se resolvieron en pocos días. El informe no dice cuáles fueron.
- El informe de 2026 ya no muestra la ITV de 2007 porque el historial solo enseña las últimas 20.

## 8. Tareas pendientes

- [ ] Reparar la fuga de los cárteres de la transmisión (caja de cambios, caja transfer o diferenciales) antes de enero.
- [ ] Pedir al taller que revise el freno delantero derecho (frena un 10 % menos que el izquierdo).
- [ ] Pasar la ITV **antes del 31/01/2027**.
- [ ] Confirmar que el coche vuelve a circular con su matrícula C9389 (fue con placas de prueba).
