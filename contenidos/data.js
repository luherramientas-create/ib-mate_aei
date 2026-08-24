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
  },

  // ---------- TEMA 4: Estadística y probabilidad ----------
  {
    id: "4.1",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Concepto de población, muestra, muestra aleatoria, datos discretos y continuos; fiabilidad de las fuentes de datos y sesgo de muestreo; qué hacer ante datos faltantes o errores de registro; interpretación de valores atípicos; técnicas de muestreo (aleatorio simple, por conveniencia, sistemático, por cuotas, estratificado).",
    orientacion: "Un valor atípico se define como un dato a más de \\(1.5 \\times \\text{RIC}\\) del cuartil más próximo. En contexto, algunos valores atípicos son válidos y otros son errores."
  },
  {
    id: "4.2",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Presentación de datos discretos y continuos: tablas de frecuencia; histogramas; frecuencia acumulada (y su uso para hallar mediana, cuartiles, percentiles, rango y RIC); diagramas de caja y bigotes.",
    orientacion: "Los intervalos de clase se dan como desigualdades, sin huecos. No se piden histogramas de densidad de frecuencia. Los valores atípicos en un diagrama de caja se marcan con una cruz (X). Se puede usar la simetría de la caja para estimar si los datos siguen una distribución normal."
  },
  {
    id: "4.3",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Medidas de tendencia central (media, mediana, moda), incluida la estimación de la media desde datos agrupados; clase modal; medidas de dispersión (rango intercuartil, desviación típica, varianza); efecto de sumar o multiplicar todos los datos por una constante; cuartiles de datos discretos.",
    orientacion: "La desviación típica y la varianza se calculan con tecnología (el cálculo a mano ayuda a comprender). Si se resta una constante a todos los datos, la media cambia pero la desviación típica no; si se multiplica, ambas cambian proporcionalmente. Distintos métodos tecnológicos pueden dar cuartiles ligeramente distintos."
  },
  {
    id: "4.4",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Correlación lineal de dos variables; coeficiente de correlación de Pearson (\\(r\\)); diagrama de dispersión y recta de ajuste óptimo por el punto medio; tipo de correlación (positiva/negativa/nula, fuerte/débil); ecuación de la recta de regresión de \\(y\\) sobre \\(x\\) y su uso para predecir.",
    orientacion: "\\(r\\) se calcula con tecnología y solo tiene sentido para relaciones lineales. Correlación no implica causalidad. Cuidado con extrapolar fuera del rango de datos, y con predecir \\(x\\) a partir de \\(y\\) usando la recta de \\(y\\) sobre \\(x\\)."
  },
  {
    id: "4.5",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Probabilidad de un suceso; sucesos complementarios; diagramas de Venn, de árbol, de espacio muestral y tablas de resultados para calcular probabilidades.",
    orientacion: ""
  },
  {
    id: "4.6",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Sucesos compuestos; sucesos incompatibles; probabilidad condicionada; sucesos independientes; probabilidad con o sin reposición.",
    orientacion: "Los problemas se pueden resolver con diagramas (Venn, árbol) sin usar las fórmulas explícitamente."
  },
  {
    id: "4.7",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Concepto de variable aleatoria discreta y su distribución de probabilidad; esperanza matemática \\(E(X)\\) para datos discretos.",
    orientacion: "\\(E(X) = 0\\) indica un juego justo, donde \\(X\\) representa la ganancia de un jugador."
  },
  {
    id: "4.8",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Distribución binomial; media y varianza; situaciones donde es un modelo adecuado.",
    orientacion: "Los valores de probabilidad binomial se hallan con tecnología. No se exige la demostración formal de la media ni la varianza. Conecta con el valor esperado de ocurrencias (4.5)."
  },
  {
    id: "4.9",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "La distribución normal y su curva; propiedades (aproximadamente 68% de los datos entre \\(\\mu \\pm \\sigma\\), 95% entre \\(\\mu \\pm 2\\sigma\\), 99.7% entre \\(\\mu \\pm 3\\sigma\\)); cálculo de probabilidades; proceso inverso (hallar el valor de la variable dada una probabilidad).",
    orientacion: "Las probabilidades y los valores de la variable se hallan con tecnología, con la media y desviación típica dadas. No implica estandarizar la variable (transformarla a \\(z\\))."
  },
  {
    id: "4.10",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Coeficiente de correlación por rangos de Spearman (\\(r_s\\)); comparación de pertinencia y limitaciones entre Pearson y Spearman según valores atípicos.",
    orientacion: "\\(r_s\\) se halla con tecnología; si hay datos empatados, los rangos se promedian. Spearman sirve para cualquier relación monótona (no solo lineal) y es menos sensible a valores atípicos que Pearson."
  },
  {
    id: "4.11",
    tema: 4,
    temaNombre: "Estadística y probabilidad",
    contenido: "Formulación de hipótesis nula y alternativa (\\(H_0\\), \\(H_1\\)); niveles de significación; valor \\(p\\); frecuencias esperadas/observadas; prueba \\(\\chi^2\\) de independencia (tablas de contingencia) y de bondad de ajuste; prueba \\(t\\) de Student para comparar medias de dos poblaciones.",
    orientacion: "En NM: muestras independientes, varianza poblacional siempre desconocida; máximo 4 filas/columnas en tablas de contingencia; grados de libertad siempre mayores que 1 (\\(n-1\\) en bondad de ajuste); frecuencias esperadas deben ser mayores a 5; solo contrastes de cola superior con niveles habituales (1%, 5%, 10%); todos los cálculos se hacen con tecnología."
  },

  // ---------- TEMA 5: Análisis ----------
  {
    id: "5.1",
    tema: 5,
    temaNombre: "Análisis",
    contenido: "Introducción al concepto de límite; la derivada interpretada como función pendiente y como razón de cambio; notaciones \\(\\frac{dy}{dx}\\), \\(f'(x)\\), \\(\\frac{dV}{dr}\\), \\(\\frac{ds}{dt}\\).",
    orientacion: "Estimación del valor de un límite a partir de una tabla o gráfico; no se requieren métodos analíticos formales para límites. Comprensión informal de la pendiente de una curva como un límite."
  },
  {
    id: "5.2",
    tema: 5,
    temaNombre: "Análisis",
    contenido: "Funciones crecientes y decrecientes; interpretación gráfica de \\(f'(x) > 0\\), \\(f'(x) = 0\\), \\(f'(x) < 0\\).",
    orientacion: "Identificar en qué intervalos la función crece o decrece a partir del signo de la derivada."
  },
  {
    id: "5.3",
    tema: 5,
    temaNombre: "Análisis",
    contenido: "La derivada de \\(f(x) = ax^n\\) es \\(f'(x) = anx^{n-1}\\), con \\(n \\in \\mathbb{Z}\\); derivada de sumas de términos de este tipo.",
    orientacion: ""
  },
  {
    id: "5.4",
    tema: 5,
    temaNombre: "Análisis",
    contenido: "Recta tangente y recta normal a una curva en un punto dado; ecuación de dichas rectas.",
    orientacion: "Se pueden usar enfoques analíticos o tecnológicos."
  },
  {
    id: "5.5",
    tema: 5,
    temaNombre: "Análisis",
    contenido: "Introducción a la integración como primitiva de funciones \\(f(x) = ax^n + bx^{n-1} + \\dots\\), con \\(n \\in \\mathbb{Z}\\), \\(n \\neq -1\\); integración con una condición para hallar la constante; integrales definidas con tecnología; área bajo una curva \\(y=f(x)\\) sobre el eje \\(x\\), donde \\(f(x) > 0\\).",
    orientacion: "Los alumnos deben entender la relación entre primitivas, integrales definidas y área bajo la curva. Se espera escribir primero la expresión correcta antes de calcular con tecnología."
  },
  {
    id: "5.6",
    tema: 5,
    temaNombre: "Análisis",
    contenido: "Valores de \\(x\\) donde la pendiente de la curva es cero (resolver \\(f'(x) = 0\\)); puntos máximos y mínimos locales.",
    orientacion: "Se puede usar tecnología para generar \\(f'(x)\\) a partir de \\(f(x)\\) y resolver \\(f'(x)=0\\). Un máximo o mínimo local no es necesariamente el valor más grande o pequeño de toda la función en su dominio."
  },
  {
    id: "5.7",
    tema: 5,
    temaNombre: "Análisis",
    contenido: "Problemas de optimización en un contexto dado (por ejemplo, maximizar beneficios, minimizar costos, maximizar volumen dado un área de superficie).",
    orientacion: "En NM no se plantean preguntas de cinemática en este subtema."
  },
  {
    id: "5.8",
    tema: 5,
    temaNombre: "Análisis",
    contenido: "Cálculo aproximado de áreas con la regla del trapecio, usando una tabla de datos o una función, con intervalos de igual ancho.",
    orientacion: "Conecta con las cotas de redondeo (1.6) y el área bajo la curva (5.5)."
  }
];
