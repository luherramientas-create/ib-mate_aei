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

// ---------- Vista de "Combinados": ejercicios integrados, sin agrupar por tema ----------

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
    const divAp = document.createElement("div");
    divAp.className = "apartado";

    const enunciadoTexto = typeof ap.enunciado === "function" ? ap.enunciado(parametros) : ap.enunciado;

    if (ap.tipo === "interpretacion") {
      divAp.innerHTML = `
        <p><strong>(${ap.id})</strong> ${ap.verboMando} ${enunciadoTexto}</p>
        <button class="btn-ver-respuesta">Ver respuesta modelo</button>
        <p class="respuesta-modelo oculto">${ap.respuestaModelo}</p>
      `;
      divAp.querySelector(".btn-ver-respuesta").addEventListener("click", () => {
        divAp.querySelector(".respuesta-modelo").classList.toggle("oculto");
      });
    } else if (ap.formato === "cientifica") {
      divAp.innerHTML = `
        <p><strong>(${ap.id})</strong> ${ap.verboMando} ${enunciadoTexto}</p>
        <div class="input-cientifica">
          <input type="number" step="any" class="input-a" placeholder="a"> &times; 10^
          <input type="number" step="1" class="input-k" placeholder="k">
          <button class="btn-verificar">Verificar</button>
        </div>
        <p class="feedback"></p>
      `;
      divAp.querySelector(".btn-verificar").addEventListener("click", () => {
        const aEst = parseFloat(divAp.querySelector(".input-a").value);
        const kEst = parseInt(divAp.querySelector(".input-k").value, 10);
        const correcta = ap.calcularRespuesta(parametros);
        const feedback = divAp.querySelector(".feedback");
        if (isNaN(aEst) || isNaN(kEst)) {
          feedback.textContent = "Complete ambos campos (a y k).";
          feedback.className = "feedback aviso";
          return;
        }
        const ok = verificarNotacionCientifica(aEst, kEst, correcta.a, correcta.k);
        feedback.textContent = ok
          ? "✓ Correcto."
          : `✗ No es correcto. Verifique que \\(1 \\le a < 10\\) y que el exponente sea el adecuado.`;
        feedback.className = ok ? "feedback correcto" : "feedback incorrecto";
        renderMathInElement(feedback, { delimiters: [{ left: "\\(", right: "\\)", display: false }], throwOnError: false });
      });
    } else {
      divAp.innerHTML = `
        <p><strong>(${ap.id})</strong> ${ap.verboMando} ${enunciadoTexto}</p>
        <div class="input-decimal">
          <input type="number" step="any" class="input-valor" placeholder="Su respuesta">
          <button class="btn-verificar">Verificar</button>
        </div>
        <p class="feedback"></p>
      `;
      divAp.querySelector(".btn-verificar").addEventListener("click", () => {
        const valorEst = parseFloat(divAp.querySelector(".input-valor").value);
        const correcta = ap.calcularRespuesta(parametros);
        const feedback = divAp.querySelector(".feedback");
        if (isNaN(valorEst)) {
          feedback.textContent = "Ingrese un valor numérico.";
          feedback.className = "feedback aviso";
          return;
        }
        const ok = verificarDecimal(valorEst, correcta, ap.cifrasSignificativas || 3);
        feedback.textContent = ok ? "✓ Correcto." : "✗ No es correcto. Revise su procedimiento.";
        feedback.className = ok ? "feedback correcto" : "feedback incorrecto";
      });
    }

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
