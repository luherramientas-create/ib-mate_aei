// data.js — Sección "Ejercicios de práctica"
//
// Contextos 100% originales (no reproducen exámenes reales del IB).
// Cada ejercicio genera valores aleatorios dentro de rangos definidos,
// por lo que cada vez que se carga se ve "distinto" pero sigue el
// mismo esquema de solución.
//
// Cada apartado de tipo "calculo" puede incluir pista1, pista2 y solucion
// (funciones que reciben los parámetros de la variante actual). Se revelan
// progresivamente según los intentos fallidos del estudiante (ver app.js).

// ---------- Utilidades de redondeo / formato ----------

function redondearCifrasSignificativas(numero, cifras) {
  if (numero === 0) return 0;
  const magnitud = Math.floor(Math.log10(Math.abs(numero)));
  const factor = Math.pow(10, cifras - 1 - magnitud);
  return Math.round(numero * factor) / factor;
}

function aFormaCientifica(numero) {
  if (numero === 0) return { a: 0, k: 0 };
  const k = Math.floor(Math.log10(Math.abs(numero)));
  const a = numero / Math.pow(10, k);
  return { a: redondearCifrasSignificativas(a, 3), k };
}

function verificarNotacionCientifica(aEstudiante, kEstudiante, aCorrecta, kCorrecta) {
  if (kEstudiante !== kCorrecta) return false;
  if (aEstudiante < 1 || aEstudiante >= 10) return false;
  return Math.abs(aEstudiante - aCorrecta) < 0.01 * Math.max(1, Math.abs(aCorrecta));
}

function verificarDecimal(respuestaEstudiante, respuestaCorrecta, cifras = 3) {
  const correctaRedondeada = redondearCifrasSignificativas(respuestaCorrecta, cifras);
  const tolerancia = Math.abs(correctaRedondeada) * 0.005 + 1e-9;
  return Math.abs(respuestaEstudiante - correctaRedondeada) <= tolerancia;
}

function verificarEntero(respuestaEstudiante, respuestaCorrecta) {
  return Number.isInteger(respuestaEstudiante) && respuestaEstudiante === respuestaCorrecta;
}

// ---------- Generadores de parámetros aleatorios ----------

const NOMBRES = ["Valeria", "Diego", "Camila", "Mateo", "Sofía", "Andrés", "Fernanda", "Luis"];

function entero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numeroGrande(minDigitos, maxDigitos) {
  const digitos = entero(minDigitos, maxDigitos);
  const primerDigito = entero(1, 9);
  let numero = primerDigito;
  for (let i = 1; i < digitos; i++) {
    numero = numero * 10 + entero(0, 9);
  }
  return numero;
}

function elegir(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

// ---------- Ejercicios de 1.1 (Notación científica) ----------

const EJERCICIOS = [

  {
    id: "ej-1.1-001",
    subtema: "1.1",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      nombre: elegir(NOMBRES),
      numero: numeroGrande(9, 13)
    }),
    contexto: (p) => `${p.nombre} investiga la distancia que hay entre la Tierra y una estrella cercana, y encuentra que es de ${p.numero.toLocaleString('es-CR')} km.`,
    apartados: [
      {
        id: "a",
        verboMando: "Escriba",
        enunciado: () => `esta distancia en la forma \\(a \\times 10^k\\), donde \\(1 \\le a < 10\\) y \\(k \\in \\mathbb{Z}\\).`,
        tipo: "calculo",
        formato: "cientifica",
        calcularRespuesta: (p) => aFormaCientifica(p.numero),
        puntos: 2,
        pista1: "Recuerde que un número en notación científica se escribe como \\(a \\times 10^k\\), donde \\(1 \\le a < 10\\).",
        pista2: (p) => `Cuente cuántas posiciones debe mover el punto decimal en ${p.numero.toLocaleString('es-CR')} para dejar un solo dígito antes del punto — ese conteo es el valor de \\(k\\).`,
        solucion: (p) => { const r = aFormaCientifica(p.numero); return `${p.numero.toLocaleString('es-CR')} = ${r.a} \\times 10^{${r.k}}`; }
      }
    ]
  },

  {
    id: "ej-1.1-002",
    subtema: "1.1",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      numero1: entero(500, 9000),
      numero2: (entero(5, 95) / 10)
    }),
    contexto: (p) => `Una empresa fabrica ${p.numero1.toLocaleString('es-CR')} unidades de un producto al mes. Cada unidad tiene una masa de ${p.numero2} kg.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: () => `la masa total (en kg) de todas las unidades fabricadas en un mes.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.numero1 * p.numero2,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Multiplique el número de unidades por la masa de cada unidad.",
        pista2: (p) => `Calcule ${p.numero1} \\times ${p.numero2}.`,
        solucion: (p) => `${p.numero1} \\times ${p.numero2} = ${redondearCifrasSignificativas(p.numero1 * p.numero2, 3)}\\text{ kg}`
      },
      {
        id: "b",
        verboMando: "Escriba",
        enunciado: () => `la respuesta del apartado anterior en la forma \\(a \\times 10^k\\).`,
        tipo: "calculo",
        formato: "cientifica",
        calcularRespuesta: (p) => aFormaCientifica(p.numero1 * p.numero2),
        puntos: 2,
        pista1: "Use la masa total que calculó en el apartado (a).",
        pista2: "Recuerde que \\(1 \\le a < 10\\); mueva el punto decimal hasta dejar un solo dígito antes de él.",
        solucion: (p) => { const total = p.numero1 * p.numero2; const r = aFormaCientifica(total); return `${redondearCifrasSignificativas(total, 3)} = ${r.a} \\times 10^{${r.k}}`; }
      }
    ]
  },

  {
    id: "ej-1.1-003",
    subtema: "1.1",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      nombre: elegir(NOMBRES),
      numero: entero(50, 900),
      horas: entero(6, 14)
    }),
    contexto: (p) => `El número de bacterias en un cultivo se duplica cada hora. Al inicio del experimento hay ${p.numero} bacterias.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `el número de bacterias después de ${p.horas} horas.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.numero * Math.pow(2, p.horas),
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "El número de bacterias se duplica cada hora, así que después de \\(t\\) horas hay \\(N_0 \\times 2^t\\) bacterias, donde \\(N_0\\) es la cantidad inicial.",
        pista2: (p) => `Calcule ${p.numero} \\times 2^{${p.horas}}.`,
        solucion: (p) => { const total = p.numero * Math.pow(2, p.horas); return `${p.numero} \\times 2^{${p.horas}} = ${redondearCifrasSignificativas(total, 3)}`; }
      },
      {
        id: "b",
        verboMando: "Escriba",
        enunciado: () => `la respuesta del apartado (a) en la forma \\(a \\times 10^k\\).`,
        tipo: "calculo",
        formato: "cientifica",
        calcularRespuesta: (p) => aFormaCientifica(p.numero * Math.pow(2, p.horas)),
        puntos: 2,
        pista1: "Use el resultado del apartado (a).",
        pista2: "Recuerde que \\(1 \\le a < 10\\).",
        solucion: (p) => { const total = p.numero * Math.pow(2, p.horas); const r = aFormaCientifica(total); return `${redondearCifrasSignificativas(total, 3)} = ${r.a} \\times 10^{${r.k}}`; }
      },
      {
        id: "c",
        verboMando: "Explique",
        enunciado: (p) => `por qué un compañero de ${p.nombre} que escribe la respuesta como <code>2.4E9</code> en su calculadora, y la copia así en su hoja de respuestas, no obtendría el punto en un examen del IB.`,
        tipo: "interpretacion",
        respuestaModelo: "La notación de calculadora (como 2.4E9) no es notación matemática estándar y no se acepta en los exámenes del IB. La respuesta debe escribirse en notación científica formal: \\(a \\times 10^k\\), con \\(1 \\le a < 10\\).",
        puntos: 1
      }
    ]
  }

];

// ---------- Ejercicios de 1.2 (Progresiones aritméticas) ----------

EJERCICIOS.push(

  {
    id: "ej-1.2-001",
    subtema: "1.2",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      u1: entero(3, 20),
      d: entero(2, 10),
      n: entero(6, 15)
    }),
    contexto: (p) => `En una progresión aritmética, el primer término es \\(u_1 = ${p.u1}\\) y la diferencia común es \\(d = ${p.d}\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: (p) => `el ${p.n}.º término de la progresión.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.u1 + (p.n - 1) * p.d,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Recuerde la fórmula del término general de una progresión aritmética: \\(u_n = u_1 + (n-1)d\\).",
        pista2: (p) => `Sustituya \\(u_1=${p.u1}\\), \\(d=${p.d}\\) y \\(n=${p.n}\\) en la fórmula.`,
        solucion: (p) => `u_{${p.n}} = ${p.u1} + (${p.n}-1)(${p.d}) = ${p.u1 + (p.n - 1) * p.d}`
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: (p) => `la suma de los primeros ${p.n} términos de la progresión.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => (p.n / 2) * (2 * p.u1 + (p.n - 1) * p.d),
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Recuerde la fórmula de la suma de los primeros \\(n\\) términos: \\(S_n = \\dfrac{n}{2}(2u_1+(n-1)d)\\).",
        pista2: (p) => `Sustituya \\(u_1=${p.u1}\\), \\(d=${p.d}\\) y \\(n=${p.n}\\) en la fórmula anterior antes de operar.`,
        solucion: (p) => { const s = (p.n / 2) * (2 * p.u1 + (p.n - 1) * p.d); return `S_{${p.n}} = \\dfrac{${p.n}}{2}(2(${p.u1})+(${p.n}-1)(${p.d})) = ${redondearCifrasSignificativas(s, 3)}`; }
      }
    ]
  },

  {
    id: "ej-1.2-002",
    subtema: "1.2",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      nombre: elegir(NOMBRES),
      u1: entero(40, 120),
      d: entero(10, 40),
      n: entero(8, 15)
    }),
    contexto: (p) => `${p.nombre} trabaja en un programa de reforestación. El primer mes planta ${p.u1} árboles, y cada mes siguiente planta ${p.d} árboles más que el mes anterior.`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: (p) => `el número de árboles que planta en el mes ${p.n}.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.u1 + (p.n - 1) * p.d,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Use la fórmula del término general: \\(u_n = u_1 + (n-1)d\\).",
        pista2: (p) => `Sustituya \\(u_1=${p.u1}\\), \\(d=${p.d}\\) y \\(n=${p.n}\\).`,
        solucion: (p) => `u_{${p.n}} = ${p.u1} + (${p.n}-1)(${p.d}) = ${p.u1 + (p.n - 1) * p.d}`
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: (p) => `el número total de árboles plantados durante los primeros ${p.n} meses.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => (p.n / 2) * (2 * p.u1 + (p.n - 1) * p.d),
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Use la fórmula de la suma: \\(S_n = \\dfrac{n}{2}(2u_1+(n-1)d)\\).",
        pista2: (p) => `Sustituya \\(u_1=${p.u1}\\), \\(d=${p.d}\\) y \\(n=${p.n}\\).`,
        solucion: (p) => { const s = (p.n / 2) * (2 * p.u1 + (p.n - 1) * p.d); return `S_{${p.n}} = \\dfrac{${p.n}}{2}(2(${p.u1})+(${p.n}-1)(${p.d})) = ${redondearCifrasSignificativas(s, 3)}`; }
      },
      {
        id: "c",
        verboMando: "Halle",
        enunciado: (p) => `el número promedio de árboles plantados por mes durante esos ${p.n} meses.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => ((p.n / 2) * (2 * p.u1 + (p.n - 1) * p.d)) / p.n,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "El promedio es la suma total dividida entre el número de meses.",
        pista2: (p) => `Ya tiene la suma del apartado (b); divídala entre ${p.n}.`,
        solucion: (p) => { const s = (p.n / 2) * (2 * p.u1 + (p.n - 1) * p.d); return `\\dfrac{S_{${p.n}}}{${p.n}} = ${redondearCifrasSignificativas(s / p.n, 3)}`; }
      }
    ]
  },

  {
    id: "ej-1.2-003",
    subtema: "1.2",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const u1 = entero(500, 2000);
      const d = entero(100, 500);
      const semanaEjemplo = entero(4, 8);
      const n0 = entero(10, 20);

      const suma = (n) => (n / 2) * (2 * u1 + (n - 1) * d);
      const sN0 = suma(n0);
      const sN0menos1 = suma(n0 - 1);
      const meta = entero(Math.ceil(sN0menos1) + 1, Math.floor(sN0));

      return { nombre, u1, d, semanaEjemplo, n0, meta };
    },
    contexto: (p) => `${p.nombre} ahorra dinero cada semana para comprarse una bicicleta. La primera semana ahorra ${p.u1} colones, y cada semana siguiente ahorra ${p.d} colones más que la semana anterior.`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: (p) => `cuánto ahorra ${p.nombre} en la semana ${p.semanaEjemplo}.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.u1 + (p.semanaEjemplo - 1) * p.d,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Use la fórmula del término general: \\(u_n = u_1+(n-1)d\\).",
        pista2: (p) => `Sustituya \\(u_1=${p.u1}\\), \\(d=${p.d}\\) y \\(n=${p.semanaEjemplo}\\).`,
        solucion: (p) => `u_{${p.semanaEjemplo}} = ${p.u1} + (${p.semanaEjemplo}-1)(${p.d}) = ${p.u1 + (p.semanaEjemplo - 1) * p.d}`
      },
      {
        id: "b",
        verboMando: "Calcule",
        enunciado: (p) => `el número mínimo de semanas que ${p.nombre} necesita ahorrar para que el total ahorrado supere los ${p.meta} colones.`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.n0,
        puntos: 3,
        pista1: "Necesita el menor \\(n\\) tal que \\(S_n = \\dfrac{n}{2}(2u_1+(n-1)d)\\) sea mayor que la meta.",
        pista2: (p) => `Pruebe distintos valores de \\(n\\) con la fórmula de la suma hasta superar los ${p.meta} colones, o resuelva la inecuación \\(S_n > ${p.meta}\\).`,
        solucion: (p) => `El menor \\(n\\) que cumple \\(S_n > ${p.meta}\\) es \\(n = ${p.n0}\\) semanas.`
      }
    ]
  }

);

// ---------- Ejercicios de 1.3 (Progresiones geométricas) ----------

EJERCICIOS.push(

  {
    id: "ej-1.3-001",
    subtema: "1.3",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      u1: entero(3, 20),
      r: elegir([2, 3, 0.5, 1.5, 2.5]),
      n: entero(4, 9)
    }),
    contexto: (p) => `En una progresión geométrica, el primer término es \\(u_1 = ${p.u1}\\) y la razón común es \\(r = ${p.r}\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: (p) => `el ${p.n}.º término de la progresión.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.u1 * Math.pow(p.r, p.n - 1),
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Recuerde la fórmula del término general de una progresión geométrica: \\(u_n = u_1 r^{n-1}\\).",
        pista2: (p) => `Sustituya \\(u_1=${p.u1}\\), \\(r=${p.r}\\) y \\(n=${p.n}\\).`,
        solucion: (p) => { const r = p.u1 * Math.pow(p.r, p.n - 1); return `u_{${p.n}} = ${p.u1} \\times (${p.r})^{${p.n}-1} = ${redondearCifrasSignificativas(r, 3)}`; }
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: (p) => `la suma de los primeros ${p.n} términos de la progresión.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.u1 * (Math.pow(p.r, p.n) - 1) / (p.r - 1),
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Recuerde la fórmula de la suma: \\(S_n = \\dfrac{u_1(r^n-1)}{r-1}\\).",
        pista2: (p) => `Sustituya \\(u_1=${p.u1}\\), \\(r=${p.r}\\) y \\(n=${p.n}\\) en la fórmula.`,
        solucion: (p) => { const s = p.u1 * (Math.pow(p.r, p.n) - 1) / (p.r - 1); return `S_{${p.n}} = \\dfrac{${p.u1}((${p.r})^{${p.n}}-1)}{${p.r}-1} = ${redondearCifrasSignificativas(s, 3)}`; }
      }
    ]
  },

  {
    id: "ej-1.3-002",
    subtema: "1.3",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const poblacionInicial = entero(200, 2000);
      const tasaPorcentual = entero(3, 15);
      const r = 1 + tasaPorcentual / 100;
      const n = entero(5, 12);

      const valorEn = (t) => poblacionInicial * Math.pow(r, t);
      const n0 = entero(5, 12);
      const vN0 = valorEn(n0);
      const vN0menos1 = valorEn(n0 - 1);
      const meta = entero(Math.ceil(vN0menos1) + 1, Math.floor(vN0));

      return { nombre, poblacionInicial, tasaPorcentual, r, n, n0, meta };
    },
    contexto: (p) => `La población de un pueblo crece geométricamente. Actualmente hay ${p.poblacionInicial.toLocaleString('es-CR')} habitantes, y se estima que la población aumenta un ${p.tasaPorcentual}% cada año.`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: (p) => `la población estimada dentro de ${p.n} años.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.poblacionInicial * Math.pow(p.r, p.n),
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "La población sigue el modelo \\(P_n = P_0 \\times r^{n}\\), donde \\(r = 1+\\dfrac{\\text{tasa}}{100}\\).",
        pista2: (p) => `Aquí \\(P_0=${p.poblacionInicial}\\), \\(r=${p.r.toFixed(2)}\\) y \\(n=${p.n}\\).`,
        solucion: (p) => { const v = p.poblacionInicial * Math.pow(p.r, p.n); return `P_{${p.n}} = ${p.poblacionInicial} \\times (${p.r.toFixed(2)})^{${p.n}} = ${redondearCifrasSignificativas(v, 3)}`; }
      },
      {
        id: "b",
        verboMando: "Calcule",
        enunciado: (p) => `el número mínimo de años completos para que la población supere los ${p.meta.toLocaleString('es-CR')} habitantes.`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.n0,
        puntos: 3,
        pista1: "Necesita el menor \\(n\\) entero tal que \\(P_0 \\times r^{n}\\) sea mayor que la meta.",
        pista2: (p) => `Puede resolver \\(n > \\dfrac{\\log(\\text{meta}/P_0)}{\\log r}\\), o probar valores de \\(n\\) directamente hasta superar ${p.meta.toLocaleString('es-CR')}.`,
        solucion: (p) => `El menor \\(n\\) que cumple la condición es \\(n = ${p.n0}\\) años.`
      }
    ]
  },

  {
    id: "ej-1.3-003",
    subtema: "1.3",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      alturaInicial: entero(80, 300),
      porcentaje: entero(40, 80),
      rebote: entero(2, 5),
      n: entero(5, 10)
    }),
    contexto: (p) => `Se deja caer una pelota desde una altura inicial de ${p.alturaInicial} cm. Cada vez que rebota, alcanza el ${p.porcentaje}% de la altura del rebote anterior.`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: (p) => `la altura que alcanza la pelota en el ${p.rebote}.º rebote.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.alturaInicial * Math.pow(p.porcentaje / 100, p.rebote),
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Tras el primer rebote, la altura es \\(h_0 \\times r\\); tras el segundo, \\(h_0 \\times r^2\\); y así sucesivamente, donde \\(r\\) es la razón (el porcentaje como decimal).",
        pista2: (p) => `Aquí \\(h_0=${p.alturaInicial}\\) y \\(r=${(p.porcentaje / 100).toFixed(2)}\\). Calcule \\(h_0 \\times r^{${p.rebote}}\\).`,
        solucion: (p) => { const v = p.alturaInicial * Math.pow(p.porcentaje / 100, p.rebote); return `${p.alturaInicial} \\times (${(p.porcentaje / 100).toFixed(2)})^{${p.rebote}} = ${redondearCifrasSignificativas(v, 3)}\\text{ cm}`; }
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: (p) => `la suma de las alturas alcanzadas en los primeros ${p.n} rebotes.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => {
          const r = p.porcentaje / 100;
          const u1 = p.alturaInicial * r; // altura del primer rebote
          return u1 * (1 - Math.pow(r, p.n)) / (1 - r);
        },
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "Las alturas de los rebotes forman una progresión geométrica cuyo primer término es la altura del primer rebote (\\(h_0 \\times r\\)), con razón \\(r\\).",
        pista2: (p) => `Use \\(S_n=\\dfrac{u_1(1-r^n)}{1-r}\\), con \\(u_1 = ${p.alturaInicial} \\times ${(p.porcentaje / 100).toFixed(2)}\\) y \\(r=${(p.porcentaje / 100).toFixed(2)}\\).`,
        solucion: (p) => {
          const r = p.porcentaje / 100;
          const u1 = p.alturaInicial * r;
          const s = u1 * (1 - Math.pow(r, p.n)) / (1 - r);
          return `S_{${p.n}} = \\dfrac{${redondearCifrasSignificativas(u1,3)}(1-(${r.toFixed(2)})^{${p.n}})}{1-${r.toFixed(2)}} = ${redondearCifrasSignificativas(s, 3)}\\text{ cm}`;
        }
      }
    ]
  }

);

// ---------- Ejercicios de 1.4 (Interés compuesto) ----------

const FRECUENCIAS = [
  { k: 1, label: "anualmente" },
  { k: 2, label: "semestralmente" },
  { k: 4, label: "trimestralmente" },
  { k: 12, label: "mensualmente" }
];

EJERCICIOS.push(

  {
    id: "ej-1.4-001",
    subtema: "1.4",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const PV = entero(100, 900) * 1000;
      const r = entero(3, 10);
      const frec = elegir(FRECUENCIAS);
      const n = entero(2, 8);
      return { nombre, PV, r, k: frec.k, kLabel: frec.label, n };
    },
    contexto: (p) => `${p.nombre} invierte ${p.PV.toLocaleString('es-CR')} colones en una cuenta que paga una tasa de interés compuesto anual nominal del ${p.r}%, capitalizada ${p.kLabel}.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `el valor de la inversión después de ${p.n} años.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.PV * Math.pow(1 + p.r / (100 * p.k), p.k * p.n),
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "Recuerde la fórmula del interés compuesto: \\(FV = PV\\left(1+\\dfrac{r}{100k}\\right)^{kn}\\).",
        pista2: (p) => `Aquí \\(PV=${p.PV}\\), \\(r=${p.r}\\), \\(k=${p.k}\\) y \\(n=${p.n}\\). El exponente completo es \\(kn=${p.k * p.n}\\).`,
        solucion: (p) => {
          const fv = p.PV * Math.pow(1 + p.r / (100 * p.k), p.k * p.n);
          return `FV = ${p.PV}\\left(1+\\dfrac{${p.r}}{100(${p.k})}\\right)^{${p.k}\\times${p.n}} = ${redondearCifrasSignificativas(fv, 3)}`;
        }
      }
    ]
  },

  {
    id: "ej-1.4-002",
    subtema: "1.4",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const PV = entero(150, 800) * 1000;
      const r = entero(4, 12);
      const frec = elegir(FRECUENCIAS);
      const n = entero(3, 10);
      return { nombre, PV, r, k: frec.k, kLabel: frec.label, n };
    },
    contexto: (p) => `${p.nombre} invierte ${p.PV.toLocaleString('es-CR')} colones en un certificado de depósito que paga una tasa de interés compuesto anual nominal del ${p.r}%, capitalizada ${p.kLabel}.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `el valor futuro de la inversión después de ${p.n} años.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.PV * Math.pow(1 + p.r / (100 * p.k), p.k * p.n),
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "Use \\(FV = PV\\left(1+\\dfrac{r}{100k}\\right)^{kn}\\).",
        pista2: (p) => `Sustituya \\(PV=${p.PV}\\), \\(r=${p.r}\\), \\(k=${p.k}\\), \\(n=${p.n}\\).`,
        solucion: (p) => {
          const fv = p.PV * Math.pow(1 + p.r / (100 * p.k), p.k * p.n);
          return `FV = ${redondearCifrasSignificativas(fv, 3)}`;
        }
      },
      {
        id: "b",
        verboMando: "Calcule",
        enunciado: () => `el interés total generado durante esos años.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.PV * Math.pow(1 + p.r / (100 * p.k), p.k * p.n) - p.PV,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "El interés generado es la diferencia entre el valor futuro y la inversión inicial: \\(I = FV - PV\\).",
        pista2: (p) => `Use el valor futuro (FV) que calculó en el apartado (a) y réstele \\(PV=${p.PV}\\).`,
        solucion: (p) => {
          const fv = p.PV * Math.pow(1 + p.r / (100 * p.k), p.k * p.n);
          return `I = ${redondearCifrasSignificativas(fv, 3)} - ${p.PV} = ${redondearCifrasSignificativas(fv - p.PV, 3)}`;
        }
      }
    ]
  },

  {
    id: "ej-1.4-003",
    subtema: "1.4",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const PV = entero(200, 1000) * 1000;
      const r = entero(3, 10);
      const rDec = 1 + r / 100;
      const nEjemplo = entero(2, 5);

      const valorEn = (t) => PV * Math.pow(rDec, t);
      const n0 = entero(5, 15);
      const vN0 = valorEn(n0);
      const vN0menos1 = valorEn(n0 - 1);
      const meta = entero(Math.ceil(vN0menos1) + 1, Math.floor(vN0));

      return { nombre, PV, r, rDec, nEjemplo, n0, meta };
    },
    contexto: (p) => `${p.nombre} invierte ${p.PV.toLocaleString('es-CR')} colones en una cuenta de ahorros que paga un interés compuesto anual del ${p.r}%, capitalizado anualmente.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `el valor de la inversión después de ${p.nEjemplo} años.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.PV * Math.pow(p.rDec, p.nEjemplo),
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Con capitalización anual (\\(k=1\\)), la fórmula se simplifica a \\(FV = PV(1+r/100)^n\\).",
        pista2: (p) => `Sustituya \\(PV=${p.PV}\\), \\(r=${p.r}\\) y \\(n=${p.nEjemplo}\\).`,
        solucion: (p) => { const fv = p.PV * Math.pow(p.rDec, p.nEjemplo); return `FV = ${p.PV}(1+${p.r}/100)^{${p.nEjemplo}} = ${redondearCifrasSignificativas(fv, 3)}`; }
      },
      {
        id: "b",
        verboMando: "Calcule",
        enunciado: (p) => `el número mínimo de años completos para que la inversión supere los ${p.meta.toLocaleString('es-CR')} colones.`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.n0,
        puntos: 3,
        pista1: "Necesita el menor \\(n\\) entero tal que \\(PV(1+r/100)^n\\) sea mayor que la meta.",
        pista2: (p) => `Pruebe distintos valores de \\(n\\) hasta superar los ${p.meta.toLocaleString('es-CR')} colones, o use logaritmos para despejar \\(n\\).`,
        solucion: (p) => `El menor \\(n\\) que cumple la condición es \\(n = ${p.n0}\\) años.`
      }
    ]
  }

);

// ---------- Ejercicios de 1.5 (Potencias y logaritmos) ----------

EJERCICIOS.push(

  {
    id: "ej-1.5-001",
    subtema: "1.5",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      concentracion: entero(1, 90) / Math.pow(10, entero(3, 6)), // ej. 4.5e-5
      phDado: (entero(30, 90) / 10) // ej. 5.7
    }),
    contexto: () => `El pH de una solución se calcula con la fórmula \\(pH = -\\log_{10}[H^+]\\), donde \\([H^+]\\) es la concentración de iones de hidrógeno, en mol/L.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `el pH de una muestra cuya concentración de iones de hidrógeno es \\([H^+] = ${p.concentracion.toExponential(2)}\\) mol/L.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => -Math.log10(p.concentracion),
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Use la fórmula \\(pH = -\\log_{10}[H^+]\\).",
        pista2: (p) => `Sustituya \\([H^+]=${p.concentracion.toExponential(2)}\\) y calcule \\(-\\log_{10}(${p.concentracion.toExponential(2)})\\) con su calculadora.`,
        solucion: (p) => `pH = -\\log_{10}(${p.concentracion.toExponential(2)}) = ${redondearCifrasSignificativas(-Math.log10(p.concentracion), 3)}`
      },
      {
        id: "b",
        verboMando: "Calcule",
        enunciado: (p) => `la concentración de iones de hidrógeno \\([H^+]\\) de otra muestra cuyo pH es ${p.phDado}.`,
        tipo: "calculo",
        formato: "cientifica",
        calcularRespuesta: (p) => aFormaCientifica(Math.pow(10, -p.phDado)),
        puntos: 2,
        pista1: "Despeje \\([H^+]\\) de la fórmula: si \\(pH=-\\log_{10}[H^+]\\), entonces \\([H^+]=10^{-pH}\\).",
        pista2: (p) => `Calcule \\(10^{-${p.phDado}}\\) y exprese el resultado en notación científica.`,
        solucion: (p) => { const r = aFormaCientifica(Math.pow(10, -p.phDado)); return `[H^+] = 10^{-${p.phDado}} = ${r.a} \\times 10^{${r.k}}\\text{ mol/L}`; }
      }
    ]
  },

  {
    id: "ej-1.5-002",
    subtema: "1.5",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      base: entero(2, 6),
      valor: entero(50, 950)
    }),
    contexto: (p) => `Resuelva la ecuación \\(${p.base}^{x} = ${p.valor}\\) para \\(x\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: () => `el valor de \\(x\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => Math.log(p.valor) / Math.log(p.base),
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "Recuerde que \\(a^x=b \\Leftrightarrow x=\\log_a b\\).",
        pista2: (p) => `Calcule \\(\\log_{${p.base}}(${p.valor})\\) usando \\(\\dfrac{\\log(${p.valor})}{\\log(${p.base})}\\) (o con \\(\\ln\\)) en su calculadora.`,
        solucion: (p) => `x = \\log_{${p.base}}(${p.valor}) = ${redondearCifrasSignificativas(Math.log(p.valor) / Math.log(p.base), 3)}`
      }
    ]
  },

  {
    id: "ej-1.5-003",
    subtema: "1.5",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const phA = entero(20, 50) / 10;
      const diferencia = entero(1, 3);
      const phB = phA + diferencia;
      return { phA, phB, diferencia };
    },
    contexto: (p) => `La solución A tiene un pH de ${p.phA}, y la solución B tiene un pH de ${p.phB}.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `la concentración de iones de hidrógeno de la solución A.`,
        tipo: "calculo",
        formato: "cientifica",
        calcularRespuesta: (p) => aFormaCientifica(Math.pow(10, -p.phA)),
        puntos: 2,
        pista1: "Use \\([H^+] = 10^{-pH}\\).",
        pista2: (p) => `Calcule \\(10^{-${p.phA}}\\).`,
        solucion: (p) => { const r = aFormaCientifica(Math.pow(10, -p.phA)); return `[H^+]_A = 10^{-${p.phA}} = ${r.a} \\times 10^{${r.k}}\\text{ mol/L}`; }
      },
      {
        id: "b",
        verboMando: "Calcule",
        enunciado: (p) => `la concentración de iones de hidrógeno de la solución B.`,
        tipo: "calculo",
        formato: "cientifica",
        calcularRespuesta: (p) => aFormaCientifica(Math.pow(10, -p.phB)),
        puntos: 2,
        pista1: "Use \\([H^+] = 10^{-pH}\\).",
        pista2: (p) => `Calcule \\(10^{-${p.phB}}\\).`,
        solucion: (p) => { const r = aFormaCientifica(Math.pow(10, -p.phB)); return `[H^+]_B = 10^{-${p.phB}} = ${r.a} \\times 10^{${r.k}}\\text{ mol/L}`; }
      },
      {
        id: "c",
        verboMando: "Explique",
        enunciado: (p) => `cuántas veces mayor es la concentración de iones de hidrógeno en la solución A que en la solución B, y cómo lo determinó a partir de la diferencia de pH.`,
        tipo: "interpretacion",
        respuestaModelo: "Como la escala de pH es logarítmica en base 10, cada unidad de diferencia en el pH representa un factor de 10 en la concentración de iones de hidrógeno. Como la diferencia entre los dos pH es de ese número de unidades, la solución A es 10 elevado a esa diferencia veces más ácida (mayor concentración de H+) que la solución B — sin necesidad de calcular ambas concentraciones por separado.",
        puntos: 1
      }
    ]
  }

);
