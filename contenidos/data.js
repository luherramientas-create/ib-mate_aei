// data.js — Sección "Contenidos"
// Fuente: Guía de Matemáticas: Aplicaciones e Interpretación (IB)
// Contenido parafraseado en palabras propias a partir de la guía oficial,
// no es una transcripción literal. Se omite la sección "Conexiones"
// (TdC, enlaces a otras asignaturas) por ser material de enriquecimiento
// docente más que de repaso para examen.
//
// El id corresponde al número de subtema NM de la guía oficial (ej. "1.1"),
// el mismo esquema de numeración usado en el cuadernillo de fórmulas.

const CONTENIDOS = [

  // ---------- TEMA 1: Aritmética y álgebra ----------
  {
    id: "1.1",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    contenido: "Notación científica: operaciones con números de la forma \\(a \\times 10^k\\), donde \\(1 \\le a < 10\\) y \\(k\\) es un número entero.",
    orientacion: "La notación de calculadora (por ejemplo <code>5.2E30</code>) no se acepta en el examen; debe escribirse como \\(5{,}2 \\times 10^{30}\\)."
  },
  {
    id: "1.2",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    contenido: "Progresiones y series aritméticas: cálculo del término \\(n\\)-ésimo y de la suma de los primeros \\(n\\) términos; uso de notación de sumatoria.",
    orientacion: "Se pueden usar calculadora gráfica u hoja de cálculo para generarlas. Si el examen permite tecnología, se espera identificar bien el primer término y la diferencia común, incluso de forma aproximada. Aplicación típica: interés simple."
  },
  {
    id: "1.3",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    contenido: "Progresiones y series geométricas: mismo tipo de cálculos que en 1.2 (término \\(n\\)-ésimo y suma), con notación de sumatoria.",
    orientacion: "Identificar el primer término y la razón con apoyo tecnológico. Conecta con los modelos exponenciales (Tema 2) y la regresión (Tema 4). Aplicaciones típicas: propagación de enfermedades, cambios salariales, crecimiento poblacional."
  },
  {
    id: "1.4",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    contenido: "Aplicaciones financieras de las progresiones geométricas: interés compuesto y depreciación anual.",
    orientacion: "Puede requerir el paquete financiero de la calculadora. No se pide derivar la fórmula. El interés compuesto puede calcularse anual, semestral, trimestral o mensualmente. Conecta con el Tema 2."
  },
  {
    id: "1.5",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    contenido: "Potencias con exponentes enteros y logaritmos: introducción a logaritmos en base 10 y en base \\(e\\); equivalencia \\(a^x = b \\Leftrightarrow \\log_a b = x\\).",
    orientacion: "Evaluación numérica de logaritmos con calculadora. Recordar que \\(\\log_e x = \\ln x\\)."
  },
  {
    id: "1.6",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    contenido: "Aproximación: cifras decimales y cifras significativas; cotas superior e inferior de un número redondeado; porcentaje de error; estimación.",
    orientacion: "Elegir el nivel de precisión adecuado al contexto; calcular cotas de error por redondeo; evaluar si un resultado es razonable (por ejemplo, una longitud no puede ser negativa)."
  },
  {
    id: "1.7",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    contenido: "Amortización y anualidades, usando medios tecnológicos.",
    orientacion: "En el examen, los pagos se asumen al final de cada período. Conocer la fórmula de anualidades ayuda a entender el concepto, pero no se evalúa directamente. Conecta con el Tema 2."
  },
  {
    id: "1.8",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    contenido: "Uso de tecnología para resolver sistemas de ecuaciones lineales (hasta tres incógnitas) y ecuaciones polinómicas.",
    orientacion: "No se exige un método de resolución específico. Los sistemas de ecuaciones en examen siempre tienen solución única. Se debe conocer la terminología estándar (por ejemplo, \"ceros\" o \"raíces\"). Conecta con el Tema 2."
  }

  // Temas 2-5 se agregan más adelante, siguiendo el mismo esquema.
];
