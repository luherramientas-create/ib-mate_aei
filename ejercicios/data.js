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

// ---------- Ejercicios de 1.6 (Aproximación: cifras significativas, cotas, % de error) ----------

EJERCICIOS.push(

  {
    id: "ej-1.6-001",
    subtema: "1.6",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const valorExacto = entero(1000, 9999) / 10; // ej. 423.7
      const valorAproximado = Math.round(valorExacto);
      return { nombre, valorExacto, valorAproximado };
    },
    contexto: (p) => `La distancia real entre dos pueblos es ${p.valorExacto} km. ${p.nombre} la redondea a ${p.valorAproximado} km.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: () => `el porcentaje de error de esta aproximación.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => Math.abs((p.valorAproximado - p.valorExacto) / p.valorExacto) * 100,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Use la fórmula \\(\\varepsilon = \\left|\\dfrac{v_A-v_E}{v_E}\\right| \\times 100\\%\\), donde \\(v_E\\) es el valor exacto y \\(v_A\\) es el valor aproximado.",
        pista2: (p) => `Aquí \\(v_E=${p.valorExacto}\\) y \\(v_A=${p.valorAproximado}\\).`,
        solucion: (p) => {
          const e = Math.abs((p.valorAproximado - p.valorExacto) / p.valorExacto) * 100;
          return `\\varepsilon = \\left|\\dfrac{${p.valorAproximado}-${p.valorExacto}}{${p.valorExacto}}\\right|\\times 100 = ${redondearCifrasSignificativas(e, 3)}\\%`;
        }
      }
    ]
  },

  {
    id: "ej-1.6-002",
    subtema: "1.6",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const valorRedondeado = entero(20, 300);
      return { nombre, valorRedondeado };
    },
    contexto: (p) => `${p.nombre} mide la longitud de una tabla de madera y obtiene ${p.valorRedondeado} cm, redondeado al centímetro más cercano.`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: () => `la cota inferior del valor real de la longitud.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.valorRedondeado - 0.5,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Si un valor se redondea al centímetro más cercano, el valor real puede estar hasta 0.5 cm por debajo o por encima del valor redondeado.",
        pista2: (p) => `La cota inferior es \\(${p.valorRedondeado} - 0.5\\).`,
        solucion: (p) => `\\text{Cota inferior} = ${p.valorRedondeado} - 0.5 = ${p.valorRedondeado - 0.5}\\text{ cm}`
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: () => `la cota superior del valor real de la longitud.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.valorRedondeado + 0.5,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "La cota superior es el valor redondeado más la mitad de la unidad de redondeo.",
        pista2: (p) => `La cota superior es \\(${p.valorRedondeado} + 0.5\\).`,
        solucion: (p) => `\\text{Cota superior} = ${p.valorRedondeado} + 0.5 = ${p.valorRedondeado + 0.5}\\text{ cm}`
      }
    ]
  },

  {
    id: "ej-1.6-003",
    subtema: "1.6",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const limite = elegir([60, 70, 80, 90]);
      const velocidadMostrada = limite + entero(-3, 6);
      const cotaInferior = velocidadMostrada - 0.5;
      return { limite, velocidadMostrada, cotaInferior };
    },
    contexto: (p) => `Un radar mide la velocidad de un vehículo y muestra ${p.velocidadMostrada} km/h, redondeada al km/h más cercano. El límite de velocidad en esa zona es ${p.limite} km/h.`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: () => `la cota inferior de la velocidad real del vehículo.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.cotaInferior,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "La velocidad mostrada está redondeada al km/h más cercano, así que la velocidad real puede ser hasta 0.5 km/h menor.",
        pista2: (p) => `La cota inferior es \\(${p.velocidadMostrada} - 0.5\\).`,
        solucion: (p) => `\\text{Cota inferior} = ${p.velocidadMostrada} - 0.5 = ${p.cotaInferior}\\text{ km/h}`
      },
      {
        id: "b",
        verboMando: "Determine",
        enunciado: (p) => `si se puede afirmar con certeza que el vehículo superó el límite de velocidad de ${p.limite} km/h. Justifique su respuesta usando la cota inferior.`,
        tipo: "interpretacion",
        respuestaModelo: (p) => {
          if (p.cotaInferior > p.limite) {
            return `Sí, se puede afirmar con certeza: incluso la cota inferior de la velocidad real (${p.cotaInferior} km/h) ya es mayor que el límite de ${p.limite} km/h, así que el vehículo superó el límite sin importar el valor exacto dentro del rango de redondeo.`;
          } else {
            return `No se puede afirmar con certeza: la cota inferior de la velocidad real (${p.cotaInferior} km/h) es menor o igual al límite de ${p.limite} km/h, así que es posible que la velocidad real del vehículo no haya superado el límite.`;
          }
        },
        puntos: 2
      }
    ]
  }

);

// ---------- Ejercicios de 1.7 (Amortización y anualidades) ----------

EJERCICIOS.push(

  {
    id: "ej-1.7-001",
    subtema: "1.7",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const pago = entero(20, 100) * 1000;
      const r = entero(3, 9);
      const n = entero(12, 36);
      const i = r / 1200; // tasa mensual
      return { nombre, pago, r, n, i };
    },
    contexto: (p) => `${p.nombre} deposita ${p.pago.toLocaleString('es-CR')} colones al final de cada mes en una cuenta de ahorros que paga una tasa de interés anual nominal del ${p.r}%, capitalizada mensualmente.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `el monto acumulado en la cuenta después de ${p.n} meses.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.pago * (Math.pow(1 + p.i, p.n) - 1) / p.i,
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "El monto acumulado de depósitos regulares se calcula con la fórmula de una anualidad: \\(FV = PMT \\times \\dfrac{(1+i)^n - 1}{i}\\), donde \\(i\\) es la tasa de interés por período (mensual, en este caso).",
        pista2: (p) => `Aquí \\(PMT=${p.pago}\\), \\(i=\\dfrac{${p.r}}{1200}=${p.i.toFixed(5)}\\) y \\(n=${p.n}\\).`,
        solucion: (p) => {
          const fv = p.pago * (Math.pow(1 + p.i, p.n) - 1) / p.i;
          return `FV = ${p.pago} \\times \\dfrac{(1+${p.i.toFixed(5)})^{${p.n}}-1}{${p.i.toFixed(5)}} = ${redondearCifrasSignificativas(fv, 3)}`;
        }
      }
    ]
  },

  {
    id: "ej-1.7-002",
    subtema: "1.7",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const monto = entero(1000, 5000) * 1000;
      const r = entero(8, 18);
      const n = entero(12, 48);
      const i = r / 1200;
      return { nombre, monto, r, n, i };
    },
    contexto: (p) => `${p.nombre} solicita un préstamo de ${p.monto.toLocaleString('es-CR')} colones para comprar un vehículo, a una tasa de interés anual nominal del ${p.r}%, capitalizada mensualmente, a pagar en ${p.n} meses.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `la cuota mensual que debe pagar ${p.nombre}.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.monto * p.i / (1 - Math.pow(1 + p.i, -p.n)),
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "Use la fórmula de la cuota de un préstamo con pagos regulares: \\(PMT = \\dfrac{PV \\times i}{1-(1+i)^{-n}}\\).",
        pista2: (p) => `Aquí \\(PV=${p.monto}\\), \\(i=\\dfrac{${p.r}}{1200}=${p.i.toFixed(5)}\\) y \\(n=${p.n}\\).`,
        solucion: (p) => {
          const pmt = p.monto * p.i / (1 - Math.pow(1 + p.i, -p.n));
          return `PMT = \\dfrac{${p.monto}\\times${p.i.toFixed(5)}}{1-(1+${p.i.toFixed(5)})^{-${p.n}}} = ${redondearCifrasSignificativas(pmt, 3)}`;
        }
      },
      {
        id: "b",
        verboMando: "Calcule",
        enunciado: (p) => `el interés total que pagará ${p.nombre} durante todo el préstamo.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => {
          const pmt = p.monto * p.i / (1 - Math.pow(1 + p.i, -p.n));
          return pmt * p.n - p.monto;
        },
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "El interés total es la suma de todas las cuotas pagadas, menos el monto original del préstamo: \\(I = PMT \\times n - PV\\).",
        pista2: (p) => `Use la cuota (PMT) del apartado (a), multiplíquela por \\(n=${p.n}\\), y réstele \\(PV=${p.monto}\\).`,
        solucion: (p) => {
          const pmt = p.monto * p.i / (1 - Math.pow(1 + p.i, -p.n));
          const interes = pmt * p.n - p.monto;
          return `I = ${redondearCifrasSignificativas(pmt, 3)} \\times ${p.n} - ${p.monto} = ${redondearCifrasSignificativas(interes, 3)}`;
        }
      }
    ]
  },

  {
    id: "ej-1.7-003",
    subtema: "1.7",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      let montoInicial, r, retiro, n, i, restante;
      let intentos = 0;
      do {
        montoInicial = entero(3000, 8000) * 1000;
        r = entero(4, 8);
        retiro = entero(20, 60) * 1000;
        n = entero(12, 36);
        i = r / 1200;
        restante = montoInicial * Math.pow(1 + i, n) - retiro * (Math.pow(1 + i, n) - 1) / i;
        intentos++;
      } while (restante <= 0 && intentos < 30);
      return { nombre, montoInicial, r, retiro, n, i };
    },
    contexto: (p) => `${p.nombre} tiene un fondo de ${p.montoInicial.toLocaleString('es-CR')} colones invertido a una tasa de interés anual nominal del ${p.r}%, capitalizada mensualmente. Retira ${p.retiro.toLocaleString('es-CR')} colones al final de cada mes para cubrir sus gastos.`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `el monto que queda en el fondo después de ${p.n} meses.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.montoInicial * Math.pow(1 + p.i, p.n) - p.retiro * (Math.pow(1 + p.i, p.n) - 1) / p.i,
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "El saldo combina el crecimiento del fondo con los retiros mensuales: \\(B_n = PV(1+i)^n - PMT\\dfrac{(1+i)^n-1}{i}\\).",
        pista2: (p) => `Aquí \\(PV=${p.montoInicial}\\), \\(PMT=${p.retiro}\\), \\(i=\\dfrac{${p.r}}{1200}=${p.i.toFixed(5)}\\) y \\(n=${p.n}\\).`,
        solucion: (p) => {
          const b = p.montoInicial * Math.pow(1 + p.i, p.n) - p.retiro * (Math.pow(1 + p.i, p.n) - 1) / p.i;
          return `B_{${p.n}} = ${p.montoInicial}(1+${p.i.toFixed(5)})^{${p.n}} - ${p.retiro}\\dfrac{(1+${p.i.toFixed(5)})^{${p.n}}-1}{${p.i.toFixed(5)}} = ${redondearCifrasSignificativas(b, 3)}`;
        }
      }
    ]
  }

);

// ---------- Ejercicios de 1.8 (Sistemas de ecuaciones y ecuaciones polinómicas con tecnología) ----------

EJERCICIOS.push(

  {
    id: "ej-1.8-001",
    subtema: "1.8",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      let x, y, adultos1, ninos1, adultos2, ninos2, det;
      let intentos = 0;
      do {
        x = entero(20, 80) * 100;       // precio adulto, múltiplo de 100
        y = entero(10, x / 100 - 5) * 100; // precio niño, menor que el de adulto
        adultos1 = entero(2, 10);
        ninos1 = entero(2, 10);
        adultos2 = entero(2, 10);
        ninos2 = entero(2, 10);
        det = adultos1 * ninos2 - adultos2 * ninos1;
        intentos++;
      } while (det === 0 && intentos < 30);

      const total1 = adultos1 * x + ninos1 * y;
      const total2 = adultos2 * x + ninos2 * y;
      const lugar = elegir(["parque de diversiones", "zoológico", "museo interactivo", "acuario"]);

      return { x, y, adultos1, ninos1, adultos2, ninos2, total1, total2, lugar };
    },
    contexto: (p) => `En un ${p.lugar}, un boleto de adulto cuesta \\(x\\) colones y un boleto de niño cuesta \\(y\\) colones. Un grupo de ${p.adultos1} adultos y ${p.ninos1} niños pagó un total de ${p.total1.toLocaleString('es-CR')} colones. Otro grupo de ${p.adultos2} adultos y ${p.ninos2} niños pagó un total de ${p.total2.toLocaleString('es-CR')} colones.`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: () => `el precio de un boleto de adulto.`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.x,
        puntos: 3,
        pista1: "Plantee un sistema de dos ecuaciones lineales con las incógnitas \\(x\\) (precio de adulto) e \\(y\\) (precio de niño), usando la información de ambos grupos.",
        pista2: (p) => `El sistema es: \\(${p.adultos1}x+${p.ninos1}y=${p.total1}\\) y \\(${p.adultos2}x+${p.ninos2}y=${p.total2}\\). Resuélvalo con su calculadora.`,
        solucion: (p) => `Resolviendo el sistema: \\(x = ${p.x}\\) colones.`
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: () => `el precio de un boleto de niño.`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.y,
        puntos: 2,
        pista1: "Use el mismo sistema de ecuaciones planteado en el apartado (a).",
        pista2: () => `Una vez que tenga el valor de \\(x\\) (del apartado anterior), sustitúyalo en cualquiera de las dos ecuaciones para despejar \\(y\\).`,
        solucion: (p) => `Resolviendo el sistema: \\(y = ${p.y}\\) colones.`
      }
    ]
  },

  {
    id: "ej-1.8-002",
    subtema: "1.8",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const a = elegir([1, 2, 3, -1, -2]);
      const b = entero(-8, 8);
      const c = entero(-15, 15);
      const xs = [-3, -2, -1, 1, 2, 3].sort(() => Math.random() - 0.5).slice(0, 3).sort((p, q) => p - q);
      const [x1, x2, x3] = xs;
      const f = (x) => a * x * x + b * x + c;
      return { a, b, c, x1, x2, x3, y1: f(x1), y2: f(x2), y3: f(x3) };
    },
    contexto: (p) => `Un modelo cuadrático \\(y=ax^2+bx+c\\) pasa por los puntos \\((${p.x1}, ${p.y1})\\), \\((${p.x2}, ${p.y2})\\) y \\((${p.x3}, ${p.y3})\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: () => `el valor de \\(a\\).`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.a,
        puntos: 3,
        pista1: "Sustituya cada punto en \\(y=ax^2+bx+c\\) para obtener un sistema de tres ecuaciones lineales en \\(a\\), \\(b\\) y \\(c\\).",
        pista2: (p) => `El sistema es: \\(a(${p.x1})^2+b(${p.x1})+c=${p.y1}\\), \\(a(${p.x2})^2+b(${p.x2})+c=${p.y2}\\), \\(a(${p.x3})^2+b(${p.x3})+c=${p.y3}\\). Resuélvalo con su calculadora.`,
        solucion: (p) => `Resolviendo el sistema: \\(a = ${p.a}\\).`
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: () => `el valor de \\(b\\).`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.b,
        puntos: 2,
        pista1: "Use el mismo sistema de tres ecuaciones del apartado (a).",
        pista2: () => `Resuelva el sistema completo con su calculadora (los tres valores \\(a\\), \\(b\\), \\(c\\) se obtienen juntos).`,
        solucion: (p) => `Resolviendo el sistema: \\(b = ${p.b}\\).`
      },
      {
        id: "c",
        verboMando: "Halle",
        enunciado: () => `el valor de \\(c\\).`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.c,
        puntos: 2,
        pista1: "Use el mismo sistema de tres ecuaciones del apartado (a).",
        pista2: () => `Resuelva el sistema completo con su calculadora (los tres valores \\(a\\), \\(b\\), \\(c\\) se obtienen juntos).`,
        solucion: (p) => `Resolviendo el sistema: \\(c = ${p.c}\\).`
      }
    ]
  },

  {
    id: "ej-1.8-003",
    subtema: "1.8",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const a = elegir([1, 2, 3]);
      let r1 = entero(-9, -1);
      let r2 = entero(1, 9);
      if (Math.random() < 0.3) { // a veces ambas raíces del mismo signo, para variar
        r1 = entero(-9, -2);
        r2 = r1 + entero(1, 6);
      }
      const rMenor = Math.min(r1, r2);
      const rMayor = Math.max(r1, r2);
      const b = -a * (rMenor + rMayor);
      const c = a * rMenor * rMayor;
      return { a, b, c, rMenor, rMayor };
    },
    contexto: (p) => {
      const bTxt = (p.b >= 0 ? " + " : " - ") + Math.abs(p.b) + "x";
      const cTxt = (p.c >= 0 ? " + " : " - ") + Math.abs(p.c);
      return `Considere la función cuadrática \\(f(x) = ${p.a}x^2${bTxt}${cTxt}\\).`;
    },
    apartados: [
      {
        id: "a",
        verboMando: "Use",
        enunciado: () => `tecnología para hallar el menor valor de \\(x\\) para el cual \\(f(x)=0\\).`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.rMenor,
        puntos: 2,
        pista1: "Use el solver de ecuaciones o la función de hallar raíces/ceros de su calculadora, aplicado a \\(f(x)=0\\).",
        pista2: () => `Esta ecuación tiene dos soluciones; identifique cuál de las dos es la menor.`,
        solucion: (p) => `El menor cero de \\(f(x)\\) es \\(x = ${p.rMenor}\\).`
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: () => `el mayor valor de \\(x\\) para el cual \\(f(x)=0\\).`,
        tipo: "calculo",
        formato: "entero",
        calcularRespuesta: (p) => p.rMayor,
        puntos: 2,
        pista1: "Use el mismo procedimiento del apartado (a).",
        pista2: () => `Identifique la segunda solución de \\(f(x)=0\\), la mayor de las dos.`,
        solucion: (p) => `El mayor cero de \\(f(x)\\) es \\(x = ${p.rMayor}\\).`
      }
    ]
  }

);

// ---------- Ejercicios de 2.1 (Ecuaciones de la recta, pendiente) ----------

EJERCICIOS.push(

  {
    id: "ej-2.1-001",
    subtema: "2.1",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      let xA, yA, xB, yB;
      do {
        xA = entero(-8, 8); yA = entero(-8, 8);
        xB = entero(-8, 8); yB = entero(-8, 8);
      } while (xA === xB);
      const m = (yB - yA) / (xB - xA);
      const c = yA - m * xA;
      return { xA, yA, xB, yB, m, c };
    },
    contexto: (p) => `La recta \\(l\\) pasa por los puntos \\(A(${p.xA}, ${p.yA})\\) y \\(B(${p.xB}, ${p.yB})\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: () => `la pendiente de la recta \\(l\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.m,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Use la fórmula de la pendiente: \\(m = \\dfrac{y_2-y_1}{x_2-x_1}\\).",
        pista2: (p) => `Sustituya los puntos \\(A(${p.xA},${p.yA})\\) y \\(B(${p.xB},${p.yB})\\).`,
        solucion: (p) => `m = \\dfrac{${p.yB}-${p.yA}}{${p.xB}-${p.xA}} = ${redondearCifrasSignificativas(p.m, 3)}`
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: () => `el valor de \\(c\\) en la ecuación de la recta \\(l\\), escrita en la forma \\(y=mx+c\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.c,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Use la pendiente hallada en (a) y sustituya uno de los puntos en \\(y=mx+c\\) para despejar \\(c\\).",
        pista2: (p) => `Sustituya el punto \\(A(${p.xA},${p.yA})\\): \\(${p.yA} = (${redondearCifrasSignificativas(p.m,3)})(${p.xA}) + c\\).`,
        solucion: (p) => `c = ${p.yA} - (${redondearCifrasSignificativas(p.m,3)})(${p.xA}) = ${redondearCifrasSignificativas(p.c, 3)}`
      }
    ]
  },

  {
    id: "ej-2.1-002",
    subtema: "2.1",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      let xA, yA, xC, yC, slopeAC;
      do {
        xA = entero(-8, 8); yA = entero(-8, 8);
        xC = entero(-8, 8); yC = entero(-8, 8);
        slopeAC = (xC !== xA) ? (yC - yA) / (xC - xA) : 0;
      } while (xA === xC || slopeAC === 0);

      const slopeL = -1 / slopeAC;
      const xM = (xA + xC) / 2;
      const yM = (yA + yC) / 2;
      const c = yM - slopeL * xM;
      const xIntercepto = -c / slopeL;

      return { xA, yA, xC, yC, slopeAC, slopeL, xM, yM, c, xIntercepto };
    },
    contexto: (p) => `Los puntos \\(A(${p.xA}, ${p.yA})\\) y \\(C(${p.xC}, ${p.yC})\\) son los extremos de un segmento. La recta \\(l\\) es perpendicular a \\(AC\\) y pasa por el punto medio de \\(AC\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: () => `la pendiente de la recta \\(AC\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.slopeAC,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Use la fórmula de la pendiente: \\(m = \\dfrac{y_2-y_1}{x_2-x_1}\\).",
        pista2: (p) => `Sustituya \\(A(${p.xA},${p.yA})\\) y \\(C(${p.xC},${p.yC})\\).`,
        solucion: (p) => `m_{AC} = \\dfrac{${p.yC}-${p.yA}}{${p.xC}-${p.xA}} = ${redondearCifrasSignificativas(p.slopeAC, 3)}`
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: () => `la pendiente de la recta \\(l\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.slopeL,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Dos rectas son perpendiculares cuando el producto de sus pendientes es \\(-1\\): \\(m_l = -\\dfrac{1}{m_{AC}}\\).",
        pista2: (p) => `Use el valor de \\(m_{AC}\\) del apartado (a).`,
        solucion: (p) => `m_l = -\\dfrac{1}{${redondearCifrasSignificativas(p.slopeAC,3)}} = ${redondearCifrasSignificativas(p.slopeL, 3)}`
      },
      {
        id: "c",
        verboMando: "Halle",
        enunciado: () => `el valor de \\(c\\) en la ecuación de la recta \\(l\\), en la forma \\(y=mx+c\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.c,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "La recta \\(l\\) pasa por el punto medio de \\(AC\\). Halle primero ese punto medio.",
        pista2: (p) => `El punto medio de \\(AC\\) es \\((${p.xM}, ${p.yM})\\). Sustitúyalo junto con \\(m_l\\) en \\(y=mx+c\\) para despejar \\(c\\).`,
        solucion: (p) => `\\text{Punto medio}=(${p.xM},${p.yM}) \\Rightarrow c = ${p.yM} - (${redondearCifrasSignificativas(p.slopeL,3)})(${p.xM}) = ${redondearCifrasSignificativas(p.c, 3)}`
      },
      {
        id: "d",
        verboMando: "Halle",
        enunciado: () => `el valor de \\(x\\) donde la recta \\(l\\) corta al eje \\(x\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.xIntercepto,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "En el eje \\(x\\), \\(y=0\\). Sustituya en la ecuación de \\(l\\) y despeje \\(x\\).",
        pista2: (p) => `Resuelva \\(0 = (${redondearCifrasSignificativas(p.slopeL,3)})x + (${redondearCifrasSignificativas(p.c,3)})\\).`,
        solucion: (p) => `x = -\\dfrac{${redondearCifrasSignificativas(p.c,3)}}{${redondearCifrasSignificativas(p.slopeL,3)}} = ${redondearCifrasSignificativas(p.xIntercepto, 3)}`
      }
    ]
  },

  {
    id: "ej-2.1-003",
    subtema: "2.1",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const den1 = elegir([1, 2]);
      const num1 = elegir([-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]);
      const m1 = num1 / den1;
      const c1 = entero(-10, 10);

      const caso = elegir(["paralela", "perpendicular", "ninguna"]);
      let num2, den2;
      if (caso === "paralela") {
        num2 = num1; den2 = den1;
      } else if (caso === "perpendicular") {
        num2 = -den1; den2 = num1;
      } else {
        do {
          den2 = elegir([1, 2, 3]);
          num2 = elegir([-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]);
        } while (Math.abs(num2 / den2 - m1) < 1e-9 || Math.abs((num2 / den2) * m1 + 1) < 1e-9);
      }

      const x1 = entero(-6, 6);
      const y1 = entero(-6, 6);
      const x2 = x1 + den2;
      const y2 = y1 + num2;
      const m2 = num2 / den2;

      return { m1, c1, x1, y1, x2, y2, m2 };
    },
    contexto: (p) => `La recta \\(l_1\\) tiene ecuación \\(y = ${p.m1}x ${p.c1 >= 0 ? "+" : "-"} ${Math.abs(p.c1)}\\). La recta \\(l_2\\) pasa por los puntos \\(P(${p.x1}, ${p.y1})\\) y \\(Q(${p.x2}, ${p.y2})\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: () => `la pendiente de la recta \\(l_2\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.m2,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Use la fórmula de la pendiente con los puntos \\(P\\) y \\(Q\\).",
        pista2: (p) => `\\(m_{l_2} = \\dfrac{${p.y2}-${p.y1}}{${p.x2}-${p.x1}}\\).`,
        solucion: (p) => `m_{l_2} = \\dfrac{${p.y2}-${p.y1}}{${p.x2}-${p.x1}} = ${redondearCifrasSignificativas(p.m2, 3)}`
      },
      {
        id: "b",
        verboMando: "Determine",
        enunciado: () => `si las rectas \\(l_1\\) y \\(l_2\\) son paralelas, perpendiculares, o ninguna de las dos. Justifique su respuesta.`,
        tipo: "interpretacion",
        respuestaModelo: (p) => {
          const esParalela = Math.abs(p.m1 - p.m2) < 1e-9;
          const esPerpendicular = Math.abs(p.m1 * p.m2 + 1) < 1e-9;
          if (esParalela) {
            return `Las rectas son paralelas, porque tienen la misma pendiente: \\(m_1 = m_2 = ${p.m1}\\).`;
          } else if (esPerpendicular) {
            return `Las rectas son perpendiculares, porque el producto de sus pendientes es \\(m_1 \\times m_2 = ${(p.m1 * p.m2).toFixed(2)} = -1\\).`;
          } else {
            return `Las rectas no son paralelas ni perpendiculares: tienen pendientes distintas (\\(m_1=${p.m1}\\), \\(m_2=${redondearCifrasSignificativas(p.m2,3)}\\)) y su producto no es \\(-1\\) (\\(m_1 \\times m_2 = ${(p.m1 * p.m2).toFixed(2)}\\)).`;
          }
        },
        puntos: 2
      }
    ]
  }

);

// ---------- Ejercicios de 2.2 (Función, dominio, recorrido, función inversa) ----------

EJERCICIOS.push(

  {
    id: "ej-2.2-001",
    subtema: "2.2",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const a = elegir([2, 3, 4, 5, 6, -2, -3, -4]);
      const b = entero(-5, 5);
      const xMin = entero(-10, -6);
      const xMax = entero(6, 12);
      const valorEval = elegir([xMin, xMax, entero(1, 5)].filter(v => v !== 0));
      // Elegimos un valor de salida "y" que sí corresponda a un x entero dentro del dominio
      const xInversaObjetivo = elegir([2, -2, 3, -3, 4].filter(v => v >= xMin && v <= xMax && v !== 0));
      const valorInversa = a / xInversaObjetivo + b;
      return { a, b, xMin, xMax, valorEval, valorInversa };
    },
    contexto: (p) => `Se define la función \\(f(x) = \\dfrac{${p.a}}{x} + ${p.b}\\), para \\(${p.xMin} \\le x \\le ${p.xMax}\\), \\(x \\neq 0\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `\\(f(${p.valorEval})\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.a / p.valorEval + p.b,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Sustituya el valor dado directamente en la expresión de \\(f(x)\\).",
        pista2: (p) => `Calcule \\(\\dfrac{${p.a}}{${p.valorEval}} + ${p.b}\\).`,
        solucion: (p) => `f(${p.valorEval}) = \\dfrac{${p.a}}{${p.valorEval}} + ${p.b} = ${redondearCifrasSignificativas(p.a / p.valorEval + p.b, 3)}`
      },
      {
        id: "b",
        verboMando: "Halle",
        enunciado: (p) => `\\(f^{-1}(${redondearCifrasSignificativas(p.valorInversa,3)})\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => {
          // resolver a/x + b = valorInversa  =>  x = a / (valorInversa - b)
          return p.a / (p.valorInversa - p.b);
        },
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "Halle \\(f^{-1}(k)\\) resolviendo la ecuación \\(f(x)=k\\) para \\(x\\).",
        pista2: (p) => `Resuelva \\(\\dfrac{${p.a}}{x} + ${p.b} = ${redondearCifrasSignificativas(p.valorInversa,3)}\\) para \\(x\\).`,
        solucion: (p) => `x = \\dfrac{${p.a}}{${redondearCifrasSignificativas(p.valorInversa,3)} - (${p.b})} = ${redondearCifrasSignificativas(p.a / (p.valorInversa - p.b), 3)}`
      }
    ]
  },

  {
    id: "ej-2.2-002",
    subtema: "2.2",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const nombre = elegir(NOMBRES);
      const a = entero(800, 2500);
      const b = entero(500, 3000);
      const dEval = entero(2, 10);
      const costoDado = a * entero(4, 12) + b; // garantiza un número de días entero exacto
      return { nombre, a, b, dEval, costoDado };
    },
    contexto: (p) => `${p.nombre} alquila una bicicleta. El costo total, en colones, de alquilarla durante \\(d\\) días se modela con \\(C(d) = ${p.a}d + ${p.b}\\), para \\(d \\ge 0\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Calcule",
        enunciado: (p) => `el costo de alquilar la bicicleta durante ${p.dEval} días.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.a * p.dEval + p.b,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "Sustituya \\(d\\) por el número de días en la fórmula de \\(C(d)\\).",
        pista2: (p) => `Calcule \\(${p.a}(${p.dEval}) + ${p.b}\\).`,
        solucion: (p) => `C(${p.dEval}) = ${p.a}(${p.dEval}) + ${p.b} = ${redondearCifrasSignificativas(p.a * p.dEval + p.b, 3)}`
      },
      {
        id: "b",
        verboMando: "Interprete",
        enunciado: (p) => `el significado del valor ${p.b} en este contexto.`,
        tipo: "interpretacion",
        respuestaModelo: (p) => `El valor ${p.b} representa el costo fijo de alquilar la bicicleta (el cargo inicial que se paga incluso si el número de días fuera 0), ya que es el valor de \\(C(d)\\) cuando \\(d=0\\).`,
        puntos: 1
      },
      {
        id: "c",
        verboMando: "Calcule",
        enunciado: (p) => `el número de días que alquiló la bicicleta ${p.nombre}, si el costo total fue de ${p.costoDado.toLocaleString('es-CR')} colones.`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => (p.costoDado - p.b) / p.a,
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "Esto equivale a hallar \\(C^{-1}(${p.costoDado})\\): resuelva \\(C(d)=${p.costoDado}\\) para \\(d\\).",
        pista2: (p) => `Resuelva \\(${p.a}d + ${p.b} = ${p.costoDado}\\).`,
        solucion: (p) => `d = \\dfrac{${p.costoDado} - ${p.b}}{${p.a}} = ${redondearCifrasSignificativas((p.costoDado - p.b) / p.a, 3)}`
      }
    ]
  },

  {
    id: "ej-2.2-003",
    subtema: "2.2",
    tipoEjercicio: "aislado",
    generarParametros: () => {
      const a = entero(1, 6);
      const b = entero(3, 15);
      const kResultado = entero(1, 6); // valor de (x-a) bajo la raíz, un cuadrado perfecto pequeño
      const valorEval = b + Math.sqrt(kResultado); // así f^{-1}(valorEval) da un resultado exacto
      return { a, b, valorEval, kResultado };
    },
    contexto: (p) => `Se define la función \\(h(x) = \\sqrt{x - ${p.a}} + ${p.b}\\), para \\(x \\ge ${p.a}\\).`,
    apartados: [
      {
        id: "a",
        verboMando: "Halle",
        enunciado: (p) => `\\(h^{-1}(${redondearCifrasSignificativas(p.valorEval,3)})\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => Math.pow(p.valorEval - p.b, 2) + p.a,
        cifrasSignificativas: 3,
        puntos: 3,
        pista1: "Resuelva \\(h(x)=k\\) para \\(x\\): despeje la raíz cuadrada y luego eleve al cuadrado ambos lados.",
        pista2: (p) => `Resuelva \\(\\sqrt{x-${p.a}} + ${p.b} = ${redondearCifrasSignificativas(p.valorEval,3)}\\).`,
        solucion: (p) => `x = (${redondearCifrasSignificativas(p.valorEval,3)} - ${p.b})^2 + ${p.a} = ${redondearCifrasSignificativas(Math.pow(p.valorEval - p.b, 2) + p.a, 3)}`
      },
      {
        id: "b",
        verboMando: "Escriba",
        enunciado: () => `el valor mínimo del dominio de \\(h^{-1}(x)\\).`,
        tipo: "calculo",
        formato: "decimal",
        calcularRespuesta: (p) => p.b,
        cifrasSignificativas: 3,
        puntos: 2,
        pista1: "El dominio de \\(h^{-1}(x)\\) es igual al recorrido de \\(h(x)\\).",
        pista2: (p) => `Como \\(\\sqrt{x-${p.a}} \\ge 0\\), el recorrido de \\(h(x)\\) es \\(h(x) \\ge ${p.b}\\).`,
        solucion: (p) => `\\text{El dominio de } h^{-1}(x) \\text{ es } x \\ge ${p.b}, \\text{ así que el valor mínimo es } ${p.b}.`
      }
    ]
  }

);
