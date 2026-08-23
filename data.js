// data.js
// Fuente: Cuadernillo de fórmulas de Matemáticas: Aplicaciones e Interpretación NM
// Versión 1.0, primeros exámenes 2021, © IBO 2023
//
// Cada fórmula tiene un id que corresponde al número de subtema de la guía
// oficial de la asignatura (ej. "1.2"). Cuando una misma sección numerada
// contiene más de una fórmula, se usa sufijo a/b/c.

const FORMULAS = [

  // ---------- TEMA 1: Aritmética y álgebra ----------
  {
    id: "1.2a",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    subtema: "Progresiones aritméticas",
    nombre: "El n-ésimo término de una progresión aritmética",
    latex: "u_n = u_1 + (n-1)d",
    notas: "",
    paginaPDF: 2
  },
  {
    id: "1.2b",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    subtema: "Progresiones aritméticas",
    nombre: "La suma de los n primeros términos de una progresión aritmética",
    latex: "S_n = \\frac{n}{2}\\big(2u_1 + (n-1)d\\big) \\; ; \\; S_n = \\frac{n}{2}(u_1 + u_n)",
    notas: "",
    paginaPDF: 2
  },
  {
    id: "1.3a",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    subtema: "Progresiones geométricas",
    nombre: "El n-ésimo término de una progresión geométrica",
    latex: "u_n = u_1 r^{\\,n-1}",
    notas: "",
    paginaPDF: 2
  },
  {
    id: "1.3b",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    subtema: "Progresiones geométricas",
    nombre: "La suma de los n primeros términos de una progresión geométrica",
    latex: "S_n = \\frac{u_1(r^n - 1)}{r - 1} = \\frac{u_1(1 - r^n)}{1 - r}, \\; r \\neq 1",
    notas: "",
    paginaPDF: 2
  },
  {
    id: "1.4",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    subtema: "Interés compuesto",
    nombre: "Interés compuesto",
    latex: "FV = PV \\times \\left(1 + \\frac{r}{100k}\\right)^{kn}",
    notas: "\\(FV\\) es el valor futuro, \\(PV\\) es el valor presente (actual), \\(n\\) es el número de años, \\(k\\) es el número de períodos de composición del interés que hay en un año, \\(r\\)% es el tipo de interés nominal anual.",
    paginaPDF: 2
  },
  {
    id: "1.5",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    subtema: "Potencias y logaritmos",
    nombre: "Potencias y logaritmos",
    latex: "a^x = b \\; \\Leftrightarrow \\; x = \\log_a b",
    notas: "donde \\(a > 0\\), \\(b > 0\\), \\(a \\neq 1\\)",
    paginaPDF: 2
  },
  {
    id: "1.6",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    subtema: "Porcentaje de error",
    nombre: "Porcentaje de error",
    latex: "\\varepsilon = \\left| \\frac{v_A - v_E}{v_E} \\right| \\times 100\\%",
    notas: "donde \\(v_E\\) es el valor exacto y \\(v_A\\) es el valor aproximado de \\(v\\).",
    paginaPDF: 2
  }

  // Temas 2-5 se agregan en el Paso 5, una vez validado el render de este tema.

  // ---------- TEMA 2: Funciones ----------
  {
    id: "2.1a",
    tema: 2,
    temaNombre: "Funciones",
    subtema: "Función lineal",
    nombre: "Ecuaciones de la recta",
    latex: "y = mx + c \\; ; \\; ax + by + d = 0 \\; ; \\; y - y_1 = m(x - x_1)",
    notas: "",
    paginaPDF: 2
  },
  {
    id: "2.1b",
    tema: 2,
    temaNombre: "Funciones",
    subtema: "Función lineal",
    nombre: "Fórmula de la pendiente",
    latex: "m = \\frac{y_2 - y_1}{x_2 - x_1}",
    notas: "",
    paginaPDF: 2
  },
  {
    id: "2.5",
    tema: 2,
    temaNombre: "Funciones",
    subtema: "Función cuadrática",
    nombre: "Eje de simetría del gráfico de una función cuadrática",
    latex: "f(x) = ax^2 + bx + c \\; \\Rightarrow \\; \\text{el eje de simetría es } x = -\\frac{b}{2a}",
    notas: "",
    paginaPDF: 2
  },

  // ---------- TEMA 3: Geometría y trigonometría ----------
  // Conocimientos previos (sin número propio en el cuadernillo original)
  {
    id: "3.0a", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Área de un paralelogramo",
    latex: "A = bh",
    notas: "donde \\(b\\) es la base y \\(h\\) es la altura",
    paginaPDF: 3
  },
  {
    id: "3.0b", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Área de un triángulo",
    latex: "A = \\frac{1}{2}(bh)",
    notas: "donde \\(b\\) es la base y \\(h\\) es la altura",
    paginaPDF: 3
  },
  {
    id: "3.0c", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Área de un trapecio",
    latex: "A = \\frac{1}{2}(a+b)h",
    notas: "donde \\(a\\) y \\(b\\) son los lados paralelos y \\(h\\) es la altura",
    paginaPDF: 3
  },
  {
    id: "3.0d", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Área de un círculo",
    latex: "A = \\pi r^2",
    notas: "donde \\(r\\) es el radio",
    paginaPDF: 3
  },
  {
    id: "3.0e", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Circunferencia (perímetro) de un círculo",
    latex: "C = 2\\pi r",
    notas: "donde \\(r\\) es el radio",
    paginaPDF: 3
  },
  {
    id: "3.0f", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Volumen de un ortoedro",
    latex: "V = lwh",
    notas: "donde \\(l\\) es la longitud, \\(w\\) es el ancho y \\(h\\) es la altura",
    paginaPDF: 3
  },
  {
    id: "3.0g", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Volumen de un cilindro",
    latex: "V = \\pi r^2 h",
    notas: "donde \\(r\\) es el radio y \\(h\\) es la altura",
    paginaPDF: 3
  },
  {
    id: "3.0h", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Volumen de un prisma",
    latex: "V = Ah",
    notas: "donde \\(A\\) es el área de la sección transversal y \\(h\\) es la altura",
    paginaPDF: 3
  },
  {
    id: "3.0i", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Área de la superficie lateral de un cilindro",
    latex: "A = 2\\pi rh",
    notas: "donde \\(r\\) es el radio y \\(h\\) es la altura",
    paginaPDF: 3
  },
  {
    id: "3.0j", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Distancia entre dos puntos",
    latex: "d = \\sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}",
    notas: "para los puntos \\((x_1, y_1)\\) y \\((x_2, y_2)\\)",
    paginaPDF: 3
  },
  {
    id: "3.0k", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Conocimientos previos",
    nombre: "Coordenadas del punto medio de un segmento de recta",
    latex: "\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)",
    notas: "para un segmento cuyos extremos son \\((x_1, y_1)\\) y \\((x_2, y_2)\\)",
    paginaPDF: 3
  },

  // 3.1 — Geometría 3D
  {
    id: "3.1a", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Geometría 3D",
    nombre: "Distancia entre dos puntos en 3D",
    latex: "d = \\sqrt{(x_1-x_2)^2+(y_1-y_2)^2+(z_1-z_2)^2}",
    notas: "para los puntos \\((x_1,y_1,z_1)\\) y \\((x_2,y_2,z_2)\\)",
    paginaPDF: 3
  },
  {
    id: "3.1b", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Geometría 3D",
    nombre: "Coordenadas del punto medio en 3D",
    latex: "\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}, \\frac{z_1+z_2}{2}\\right)",
    notas: "para un segmento cuyos extremos son \\((x_1,y_1,z_1)\\) y \\((x_2,y_2,z_2)\\)",
    paginaPDF: 3
  },
  {
    id: "3.1c", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Geometría 3D",
    nombre: "Volumen de una pirámide recta",
    latex: "V = \\frac{1}{3}Ah",
    notas: "donde \\(A\\) es el área de la base y \\(h\\) es la altura",
    paginaPDF: 4
  },
  {
    id: "3.1d", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Geometría 3D",
    nombre: "Volumen de un cono recto",
    latex: "V = \\frac{1}{3}\\pi r^2 h",
    notas: "donde \\(r\\) es el radio y \\(h\\) es la altura",
    paginaPDF: 4
  },
  {
    id: "3.1e", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Geometría 3D",
    nombre: "Área de la superficie lateral de un cono",
    latex: "A = \\pi r l",
    notas: "donde \\(r\\) es el radio y \\(l\\) es la generatriz",
    paginaPDF: 4
  },
  {
    id: "3.1f", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Geometría 3D",
    nombre: "Volumen de una esfera",
    latex: "V = \\frac{4}{3}\\pi r^3",
    notas: "donde \\(r\\) es el radio",
    paginaPDF: 4
  },
  {
    id: "3.1g", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Geometría 3D",
    nombre: "Área de la superficie de una esfera",
    latex: "A = 4\\pi r^2",
    notas: "donde \\(r\\) es el radio",
    paginaPDF: 4
  },

  // 3.2 — Trigonometría
  {
    id: "3.2a", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Trigonometría",
    nombre: "Teorema del seno",
    latex: "\\frac{a}{\\operatorname{sen} A} = \\frac{b}{\\operatorname{sen} B} = \\frac{c}{\\operatorname{sen} C}",
    notas: "",
    paginaPDF: 4
  },
  {
    id: "3.2b", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Trigonometría",
    nombre: "Teorema del coseno",
    latex: "c^2 = a^2+b^2-2ab\\cos C \\; ; \\; \\cos C = \\frac{a^2+b^2-c^2}{2ab}",
    notas: "",
    paginaPDF: 4
  },
  {
    id: "3.2c", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "Trigonometría",
    nombre: "Área de un triángulo",
    latex: "A = \\frac{1}{2}ab\\operatorname{sen} C",
    notas: "",
    paginaPDF: 4
  },

  // 3.4 — El círculo
  {
    id: "3.4a", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "El círculo",
    nombre: "Longitud de un arco",
    latex: "l = \\frac{\\theta}{360} \\times 2\\pi r",
    notas: "donde \\(\\theta\\) es el ángulo en grados y \\(r\\) es el radio",
    paginaPDF: 4
  },
  {
    id: "3.4b", tema: 3, temaNombre: "Geometría y trigonometría",
    subtema: "El círculo",
    nombre: "Área de un sector circular",
    latex: "A = \\frac{\\theta}{360} \\times \\pi r^2",
    notas: "donde \\(\\theta\\) es el ángulo en grados y \\(r\\) es el radio",
    paginaPDF: 4
  },

  // ---------- TEMA 4: Estadística y probabilidad ----------
  {
    id: "4.2", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Medidas de dispersión",
    nombre: "Rango intercuartil",
    latex: "\\text{RIC} = Q_3 - Q_1",
    notas: "",
    paginaPDF: 5
  },
  {
    id: "4.3", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Medidas de tendencia central",
    nombre: "Media de un conjunto de datos",
    latex: "\\bar{x} = \\frac{\\sum_{i=1}^{k} f_i x_i}{n}",
    notas: "donde \\(n = \\sum_{i=1}^{k} f_i\\)",
    paginaPDF: 5
  },
  {
    id: "4.5a", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Probabilidad",
    nombre: "Probabilidad de un suceso A",
    latex: "P(A) = \\frac{n(A)}{n(U)}",
    notas: "",
    paginaPDF: 5
  },
  {
    id: "4.5b", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Probabilidad",
    nombre: "Sucesos complementarios",
    latex: "P(A) + P(A') = 1",
    notas: "",
    paginaPDF: 5
  },
  {
    id: "4.6a", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Probabilidad",
    nombre: "Sucesos compuestos",
    latex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
    notas: "",
    paginaPDF: 5
  },
  {
    id: "4.6b", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Probabilidad",
    nombre: "Sucesos incompatibles (mutuamente excluyentes)",
    latex: "P(A \\cup B) = P(A) + P(B)",
    notas: "",
    paginaPDF: 5
  },
  {
    id: "4.6c", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Probabilidad",
    nombre: "Probabilidad condicionada",
    latex: "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}",
    notas: "",
    paginaPDF: 5
  },
  {
    id: "4.6d", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Probabilidad",
    nombre: "Sucesos independientes",
    latex: "P(A \\cap B) = P(A)P(B)",
    notas: "",
    paginaPDF: 5
  },
  {
    id: "4.7", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Variables aleatorias",
    nombre: "Valor esperado de una variable aleatoria discreta X",
    latex: "E(X) = \\sum_{i=1}^{k} x_i \\, P(X = x_i)",
    notas: "",
    paginaPDF: 5
  },
  {
    id: "4.8a", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Distribución binomial",
    nombre: "Media de la distribución binomial",
    latex: "E(X) = np",
    notas: "donde \\(X \\sim B(n, p)\\)",
    paginaPDF: 5
  },
  {
    id: "4.8b", tema: 4, temaNombre: "Estadística y probabilidad",
    subtema: "Distribución binomial",
    nombre: "Varianza de la distribución binomial",
    latex: "\\text{Var}(X) = np(1-p)",
    notas: "donde \\(X \\sim B(n, p)\\)",
    paginaPDF: 5
  },

  // ---------- TEMA 5: Análisis ----------
  {
    id: "5.3", tema: 5, temaNombre: "Análisis",
    subtema: "Derivadas",
    nombre: "Derivada de \\(x^n\\)",
    latex: "f(x) = x^n \\; \\Rightarrow \\; f'(x) = nx^{n-1}",
    notas: "",
    paginaPDF: 6
  },
  {
    id: "5.5a", tema: 5, temaNombre: "Análisis",
    subtema: "Integrales",
    nombre: "Integral de \\(x^n\\)",
    latex: "\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C",
    notas: "\\(n \\neq -1\\)",
    paginaPDF: 6
  },
  {
    id: "5.5b", tema: 5, temaNombre: "Análisis",
    subtema: "Integrales",
    nombre: "Área entre una curva y el eje x",
    latex: "A = \\int_a^b y \\, dx",
    notas: "donde \\(y = f(x)\\) y \\(f(x) > 0\\)",
    paginaPDF: 6
  },
  {
    id: "5.8", tema: 5, temaNombre: "Análisis",
    subtema: "Integración numérica",
    nombre: "Regla del trapecio",
    latex: "\\int_a^b y \\, dx \\approx \\frac{1}{2}h\\big((y_0+y_n) + 2(y_1+y_2+\\dots+y_{n-1})\\big)",
    notas: "donde \\(h = \\dfrac{b-a}{n}\\)",
    paginaPDF: 6
  }
];
