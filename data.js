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
    notas: "FV es el valor futuro, PV es el valor presente (actual), n es el número de años, k es el número de períodos de composición del interés que hay en un año, r% es el tipo de interés nominal anual.",
    paginaPDF: 2
  },
  {
    id: "1.5",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    subtema: "Potencias y logaritmos",
    nombre: "Potencias y logaritmos",
    latex: "a^x = b \\; \\Leftrightarrow \\; x = \\log_a b",
    notas: "donde a > 0, b > 0, a \\neq 1",
    paginaPDF: 2
  },
  {
    id: "1.6",
    tema: 1,
    temaNombre: "Aritmética y álgebra",
    subtema: "Porcentaje de error",
    nombre: "Porcentaje de error",
    latex: "\\varepsilon = \\left| \\frac{v_A - v_E}{v_E} \\right| \\times 100\\%",
    notas: "donde v_E es el valor exacto y v_A es el valor aproximado de v.",
    paginaPDF: 2
  }

  // Temas 2-5 se agregan en el Paso 5, una vez validado el render de este tema.
];
