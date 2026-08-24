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
  },

  // Temas 2-5 se agregan más adelante, siguiendo el mismo esquema.

  // ---------- TEMA 2: Funciones ----------
  {
    id: "2.1",
    tema: 2,
    temaNombre: "Funciones",
    contenido: "Distintas formas de expresar la ecuación de una recta (pendiente-intersección, forma general, punto-pendiente); pendiente; rectas paralelas (\\(m_1=m_2\\)) y perpendiculares (\\(m_1 \\times m_2 = -1\\)).",
    orientacion: "Aplicable a calcular la pendiente de zonas inclinadas (carreteras de montaña, rampas, etc.)."
  },
  {
    id: "2.2",
    tema: 2,
    temaNombre: "Funciones",
    contenido: "Concepto de función, dominio, recorrido y gráfico; notación de funciones (\\(f(x)\\), \\(v(t)\\), \\(C(n)\\)); la función como modelo matemático; concepto de función inversa (revierte el efecto de la función), notación \\(f^{-1}(x)\\), simetría respecto a \\(y=x\\).",
    orientacion: "La función inversa solo existe para funciones inyectivas; el dominio de \\(f^{-1}(x)\\) es el recorrido de \\(f(x)\\)."
  },
  {
    id: "2.3",
    tema: 2,
    temaNombre: "Funciones",
    contenido: "El gráfico de una función y su ecuación \\(y=f(x)\\); elaborar un bosquejo a partir de información dada; uso de tecnología para graficar funciones, incluida la suma y diferencia de funciones.",
    orientacion: "Distinguir entre \"dibujar con precisión\" y \"dibujar aproximadamente\" (términos de instrucción del IB); todos los ejes y características importantes deben quedar marcados."
  },
  {
    id: "2.4",
    tema: 2,
    temaNombre: "Funciones",
    contenido: "Determinar las características importantes de un gráfico: máximos, mínimos, intersecciones, simetría, vértice, ceros/raíces, asíntotas horizontales y verticales (con tecnología); hallar puntos de intersección entre curvas o rectas.",
    orientacion: ""
  },
  {
    id: "2.5",
    tema: 2,
    temaNombre: "Funciones",
    contenido: "Modelización con funciones: lineales \\(f(x)=mx+c\\) (incluidos modelos por tramos), cuadráticas \\(f(x)=ax^2+bx+c\\), de crecimiento/decrecimiento exponencial \\(f(x)=ka^x+c\\), \\(f(x)=ke^{rx}+c\\), variación directa/inversa \\(f(x)=ax^n\\), cúbicas \\(f(x)=ax^3+bx^2+cx+d\\), y sinusoidales \\(f(x)=a\\,\\operatorname{sen}(bx)+d\\), \\(f(x)=a\\cos(bx)+d\\).",
    orientacion: "Para modelos sinusoidales, solo se espera predecir amplitud, período y ecuación del eje principal (no convertir seno a coseno). Conecta con 2.1, 1.2, 1.3, 1.4, 1.7 y 1.8."
  },

  // ---------- TEMA 3: Geometría y trigonometría ----------
  {
    id: "3.1",
    tema: 3,
    temaNombre: "Geometría y trigonometría",
    contenido: "Distancia entre dos puntos en 3D y su punto medio; volumen y área de superficie de sólidos 3D (pirámide recta, cono recto, esfera, semiesfera, y combinaciones); ángulo entre dos rectas que se cruzan o entre una recta y un plano.",
    orientacion: "En NM, las preguntas de trigonometría en figuras 3D se limitan a triángulos rectángulos; se espera identificar los triángulos rectángulos relevantes dentro de la figura para hallar longitudes y ángulos desconocidos."
  },
  {
    id: "3.2",
    tema: 3,
    temaNombre: "Geometría y trigonometría",
    contenido: "Razones trigonométricas (seno, coseno, tangente) para hallar lados y ángulos en triángulos rectángulos; teorema del seno; teorema del coseno; área de un triángulo con \\(\\frac{1}{2}ab\\,\\operatorname{sen}\\,C\\).",
    orientacion: "Se recomienda hacer bosquejos rotulados. Conecta con las funciones inversas (2.2) para hallar ángulos. No incluye el caso ambiguo del teorema del seno."
  },
  {
    id: "3.3",
    tema: 3,
    temaNombre: "Geometría y trigonometría",
    contenido: "Aplicaciones de trigonometría en triángulos rectángulos y no rectángulos, incluido el teorema de Pitágoras; ángulos de elevación y depresión; elaborar diagramas rotulados a partir de enunciados escritos.",
    orientacion: "El contexto puede incluir rumbos o demoras."
  },
  {
    id: "3.4",
    tema: 3,
    temaNombre: "Geometría y trigonometría",
    contenido: "El círculo: longitud de un arco y área de un sector circular.",
    orientacion: "En NM no se usan radianes, solo grados."
  },
  {
    id: "3.5",
    tema: 3,
    temaNombre: "Geometría y trigonometría",
    contenido: "Ecuaciones de mediatrices, dados dos puntos o el segmento y su punto medio.",
    orientacion: "Conecta con las ecuaciones de la recta (2.1)."
  },
  {
    id: "3.6",
    tema: 3,
    temaNombre: "Geometría y trigonometría",
    contenido: "Diagramas de Voronoi: sitios, vértices, aristas, celdas; añadir un sitio nuevo a un diagrama existente; interpolación del vecino más próximo. Aplicación típica: el problema del \"vertido de residuos tóxicos\".",
    orientacion: "En examen se dan las coordenadas de los sitios para calcular las ecuaciones de las mediatrices (no hay que trazarlas a mano). El punto solución siempre está en la intersección de tres aristas. Para todos los puntos de una celda se asume el mismo valor que el del sitio correspondiente."
  }
];
