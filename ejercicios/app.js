// app.js — Sección "Ejercicios de práctica"

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenido");
  const botones = document.querySelectorAll(".tema-btn");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const temaNum = parseInt(boton.dataset.tema, 10);
      botones.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");
      renderTema(temaNum, contenedor);
    });
  });

  botones[0].classList.add("activo");
  renderTema(1, contenedor);
});

function renderTema(temaNum, contenedor) {
  contenedor.innerHTML = "";

  // Por ahora solo 1.1 (Tema 1) tiene ejercicios reales.
  if (temaNum !== 1) {
    contenedor.innerHTML = '<p class="placeholder">Próximamente — este tema todavía no tiene ejercicios cargados.</p>';
    return;
  }

  const ejerciciosDeTema = EJERCICIOS.filter(e => e.subtema.startsWith("1."));

  ejerciciosDeTema.forEach(ej => {
    const bloque = document.createElement("div");
    bloque.className = "formula-bloque";
    bloque.dataset.ejercicioId = ej.id;
    contenedor.appendChild(bloque);
    montarEjercicio(ej, bloque);
  });
}

// Genera una nueva variante del ejercicio (parámetros aleatorios) y la dibuja.
function montarEjercicio(ejercicio, contenedorEj) {
  const parametros = ejercicio.generarParametros();

  contenedorEj.innerHTML = `
    <div class="formula-encabezado">
      <span class="formula-id">${ejercicio.subtema}</span>
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
      divAp.querySelector(".btn-ver-respuesta").addEventListener("click", (e) => {
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
      // formato decimal normal
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
