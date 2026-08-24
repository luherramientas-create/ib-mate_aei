// app.js — Sección "Ejercicios de práctica"

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenido");
  const botones = document.querySelectorAll(".tema-btn");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");
      const valor = boton.dataset.tema;
      if (valor === "combinados") {
        renderCombinados(contenedor);
      } else {
        renderTema(parseInt(valor, 10), contenedor);
      }
    });
  });

  botones[0].classList.add("activo");
  renderTema(1, contenedor);
});

// ---------- Vista de un Tema: chips de subtema + lista de ejercicios ----------

function renderTema(temaNum, contenedor) {
  contenedor.innerHTML = "";

  const ejerciciosDeTema = EJERCICIOS.filter(
    e => e.tipoEjercicio === "aislado" && e.subtema && e.subtema.startsWith(temaNum + ".")
  );

  if (ejerciciosDeTema.length === 0) {
    contenedor.innerHTML = '<p class="placeholder">Próximamente — este tema todavía no tiene ejercicios cargados.</p>';
    return;
  }

  const subtemas = [...new Set(ejerciciosDeTema.map(e => e.subtema))].sort();

  const navSub = document.createElement("div");
  navSub.className = "subtema-nav";

  const listaDiv = document.createElement("div");
  listaDiv.className = "lista-ejercicios";

  subtemas.forEach((st, i) => {
    const chip = document.createElement("button");
    chip.className = "subtema-chip";
    chip.textContent = st;
    if (i === 0) chip.classList.add("activo");
    chip.addEventListener("click", () => {
      navSub.querySelectorAll(".subtema-chip").forEach(c => c.classList.remove("activo"));
      chip.classList.add("activo");
      renderListaEjercicios(ejerciciosDeTema.filter(e => e.subtema === st), listaDiv);
    });
    navSub.appendChild(chip);
  });

  contenedor.appendChild(navSub);
  contenedor.appendChild(listaDiv);

  renderListaEjercicios(ejerciciosDeTema.filter(e => e.subtema === subtemas[0]), listaDiv);
}

// ---------- Vista de "Combinados" ----------

function renderCombinados(contenedor) {
  contenedor.innerHTML = "";
  const ejerciciosCombinados = EJERCICIOS.filter(e => e.tipoEjercicio === "integrado");

  if (ejerciciosCombinados.length === 0) {
    contenedor.innerHTML = '<p class="placeholder">Próximamente — todavía no hay ejercicios combinados cargados. Aparecerán aquí a medida que se vayan agregando.</p>';
    return;
  }

  const listaDiv = document.createElement("div");
  listaDiv.className = "lista-ejercicios";
  contenedor.appendChild(listaDiv);
  renderListaEjercicios(ejerciciosCombinados, listaDiv);
}

// ---------- Render de una lista de ejercicios ----------

function renderListaEjercicios(lista, contenedorLista) {
  contenedorLista.innerHTML = "";
  lista.forEach(ej => {
    const bloque = document.createElement("div");
    bloque.className = "formula-bloque";
    bloque.dataset.ejercicioId = ej.id;
    contenedorLista.appendChild(bloque);
    montarEjercicio(ej, bloque);
  });
}

// ---------- Montar un ejercicio individual (genera variante + apartados) ----------

function montarEjercicio(ejercicio, contenedorEj) {
  const parametros = ejercicio.generarParametros();
  const etiqueta = ejercicio.subtema ? ejercicio.subtema : ejercicio.subtemas.join(" + ");

  contenedorEj.innerHTML = `
    <div class="formula-encabezado">
      <span class="formula-id">${etiqueta}</span>
      <button class="btn-reintentar">🔄 Nueva variante</button>
    </div>
    <p class="ejercicio-contexto">${ejercicio.contexto(parametros)}</p>
    <div class="ejercicio-apartados"></div>
  `;

  const contApartados = contenedorEj.querySelector(".ejercicio-apartados");

  ejercicio.apartados.forEach(ap => {
    const divAp = ap.tipo === "interpretacion"
      ? crearApartadoInterpretacion(ap, parametros)
      : crearApartadoCalculo(ap, parametros);
    contApartados.appendChild(divAp);
  });

  contenedorEj.querySelector(".btn-reintentar").addEventListener("click", () => {
    montarEjercicio(ejercicio, contenedorEj);
  });

  renderMathInElement(contenedorEj, {
    delimiters: [
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ],
    throwOnError: false
  });
}

// ---------- Apartado tipo "interpretación" (respuesta modelo, sin calificar) ----------

function crearApartadoInterpretacion(ap, parametros) {
  const divAp = document.createElement("div");
  divAp.className = "apartado";
  const enunciadoTexto = typeof ap.enunciado === "function" ? ap.enunciado(parametros) : ap.enunciado;

  divAp.innerHTML = `
    <p><strong>(${ap.id})</strong> ${ap.verboMando} ${enunciadoTexto}</p>
    <button class="btn-ver-respuesta">Ver respuesta modelo</button>
    <p class="respuesta-modelo oculto">${typeof ap.respuestaModelo === "function" ? ap.respuestaModelo(parametros) : ap.respuestaModelo}</p>
  `;
  divAp.querySelector(".btn-ver-respuesta").addEventListener("click", () => {
    divAp.querySelector(".respuesta-modelo").classList.toggle("oculto");
  });

  return divAp;
}

// ---------- Apartado tipo "cálculo": input + verificación + pistas progresivas ----------

function crearApartadoCalculo(ap, parametros) {
  const divAp = document.createElement("div");
  divAp.className = "apartado";
  const enunciadoTexto = typeof ap.enunciado === "function" ? ap.enunciado(parametros) : ap.enunciado;

  let inputHTML;
  if (ap.formato === "cientifica") {
    inputHTML = `
      <div class="input-cientifica">
        <input type="number" step="any" class="input-a" placeholder="a"> &times; 10^
        <input type="number" step="1" class="input-k" placeholder="k">
        <button class="btn-verificar">Verificar</button>
      </div>`;
  } else if (ap.formato === "entero") {
    inputHTML = `
      <div class="input-decimal">
        <input type="number" step="1" class="input-valor" placeholder="Su respuesta (entero)">
        <button class="btn-verificar">Verificar</button>
      </div>`;
  } else {
    inputHTML = `
      <div class="input-decimal">
        <input type="number" step="any" class="input-valor" placeholder="Su respuesta">
        <button class="btn-verificar">Verificar</button>
      </div>`;
  }

  divAp.innerHTML = `
    <p><strong>(${ap.id})</strong> ${ap.verboMando} ${enunciadoTexto}</p>
    ${inputHTML}
    <p class="feedback"></p>
    <p class="pista pista1 oculto"></p>
    <p class="pista pista2 oculto"></p>
    <div class="solucion oculto"></div>
  `;

  let intentosFallidos = 0;
  let resuelto = false;

  const boton = divAp.querySelector(".btn-verificar");
  const feedback = divAp.querySelector(".feedback");
  const pista1El = divAp.querySelector(".pista1");
  const pista2El = divAp.querySelector(".pista2");
  const solucionEl = divAp.querySelector(".solucion");

  function bloquearApartado() {
    resuelto = true;
    boton.disabled = true;
    divAp.querySelectorAll("input").forEach(i => i.disabled = true);
  }

  boton.addEventListener("click", () => {
    if (resuelto) return;

    const correcta = ap.calcularRespuesta(parametros);
    let entradaValida = true;
    let ok = false;

    if (ap.formato === "cientifica") {
      const aEst = parseFloat(divAp.querySelector(".input-a").value);
      const kEst = parseInt(divAp.querySelector(".input-k").value, 10);
      if (isNaN(aEst) || isNaN(kEst)) {
        entradaValida = false;
      } else {
        ok = verificarNotacionCientifica(aEst, kEst, correcta.a, correcta.k);
      }
    } else if (ap.formato === "entero") {
      const valorEst = parseInt(divAp.querySelector(".input-valor").value, 10);
      if (isNaN(valorEst)) {
        entradaValida = false;
      } else {
        ok = verificarEntero(valorEst, correcta);
      }
    } else {
      const valorEst = parseFloat(divAp.querySelector(".input-valor").value);
      if (isNaN(valorEst)) {
        entradaValida = false;
      } else {
        ok = verificarDecimal(valorEst, correcta, ap.cifrasSignificativas || 3);
      }
    }

    if (!entradaValida) {
      feedback.textContent = "Ingrese una respuesta antes de verificar.";
      feedback.className = "feedback aviso";
      return;
    }

    if (ok) {
      feedback.textContent = "✓ Correcto.";
      feedback.className = "feedback correcto";
      bloquearApartado();
      return;
    }

    intentosFallidos++;
    feedback.textContent = `✗ No es correcto (intento ${intentosFallidos}). Revise su procedimiento.`;
    feedback.className = "feedback incorrecto";

    if (intentosFallidos === 2 && ap.pista1) {
      const texto = typeof ap.pista1 === "function" ? ap.pista1(parametros) : ap.pista1;
      pista1El.innerHTML = "💡 <strong>Pista 1:</strong> " + texto;
      pista1El.classList.remove("oculto");
    }

    if (intentosFallidos === 3 && ap.pista2) {
      const texto = typeof ap.pista2 === "function" ? ap.pista2(parametros) : ap.pista2;
      pista2El.innerHTML = "💡 <strong>Pista 2:</strong> " + texto;
      pista2El.classList.remove("oculto");
    }

    if (intentosFallidos >= 4 && ap.solucion) {
      const texto = typeof ap.solucion === "function" ? ap.solucion(parametros) : ap.solucion;
      solucionEl.innerHTML = "<strong>Solución:</strong><br>" + texto;
      solucionEl.classList.remove("oculto");
      bloquearApartado();
    }

    renderMathInElement(divAp, {
      delimiters: [{ left: "\\(", right: "\\)", display: false }],
      throwOnError: false
    });
  });

  return divAp;
}
