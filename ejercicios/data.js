// data.js — Sección "Ejercicios de práctica"
//
// Contextos 100% originales (no reproducen exámenes reales del IB).
// Cada ejercicio genera valores aleatorios dentro de rangos definidos,
// por lo que cada vez que se carga se ve "distinto" pero sigue el
// mismo esquema de solución.

// ---------- Utilidades de redondeo / formato ----------

// Redondea un número a n cifras significativas (no decimales).
function redondearCifrasSignificativas(numero, cifras) {
  if (numero === 0) return 0;
  const magnitud = Math.floor(Math.log10(Math.abs(numero)));
  const factor = Math.pow(10, cifras - 1 - magnitud);
  return Math.round(numero * factor) / factor;
}

// Convierte un número a su forma científica canónica: { a, k }
// tal que numero = a * 10^k, con 1 <= a < 10.
function aFormaCientifica(numero) {
  if (numero === 0) return { a: 0, k: 0 };
  const k = Math.floor(Math.log10(Math.abs(numero)));
  const a = numero / Math.pow(10, k);
  return { a: redondearCifrasSignificativas(a, 3), k };
}

// Compara la respuesta del estudiante (a, k) contra la respuesta correcta,
// con tolerancia para redondeo a 3 cifras significativas en 'a'.
function verificarNotacionCientifica(aEstudiante, kEstudiante, aCorrecta, kCorrecta) {
  if (kEstudiante !== kCorrecta) return false;
  if (aEstudiante < 1 || aEstudiante >= 10) return false; // fuera del rango 1 <= a < 10
  return Math.abs(aEstudiante - aCorrecta) < 0.01 * Math.max(1, Math.abs(aCorrecta));
}

// Compara una respuesta numérica decimal normal, tolerante a redondeo de 3 c.s.
function verificarDecimal(respuestaEstudiante, respuestaCorrecta, cifras = 3) {
  const correctaRedondeada = redondearCifrasSignificativas(respuestaCorrecta, cifras);
  const tolerancia = Math.abs(correctaRedondeada) * 0.005 + 1e-9;
  return Math.abs(respuestaEstudiante - correctaRedondeada) <= tolerancia;
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
        puntos: 2
      }
    ]
  },

  {
    id: "ej-1.1-002",
    subtema: "1.1",
    tipoEjercicio: "aislado",
    generarParametros: () => ({
      numero1: entero(500, 9000),
      numero2: (entero(5, 95) / 10) // ej. 0.5 a 9.5
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
        puntos: 2
      },
      {
        id: "b",
        verboMando: "Escriba",
        enunciado: () => `la respuesta del apartado anterior en la forma \\(a \\times 10^k\\).`,
        tipo: "calculo",
        formato: "cientifica",
        calcularRespuesta: (p) => aFormaCientifica(p.numero1 * p.numero2),
        puntos: 2
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
        puntos: 2
      },
      {
        id: "b",
        verboMando: "Escriba",
        enunciado: () => `la respuesta del apartado (a) en la forma \\(a \\times 10^k\\).`,
        tipo: "calculo",
        formato: "cientifica",
        calcularRespuesta: (p) => aFormaCientifica(p.numero * Math.pow(2, p.horas)),
        puntos: 2
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
