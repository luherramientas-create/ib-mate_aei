// app.js — Sección "Contenidos"

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
  const items = CONTENIDOS.filter(c => c.tema === temaNum);

  contenedor.innerHTML = "";

  if (items.length === 0) {
    contenedor.innerHTML = '<p class="placeholder">Próximamente — este tema todavía no tiene contenido cargado.</p>';
    return;
  }

  items.forEach(c => {
    const bloque = document.createElement("div");
    bloque.className = "formula-bloque";

    bloque.innerHTML = `
      <div class="formula-encabezado">
        <span class="formula-id">${c.id}</span>
      </div>
      <p class="contenido-texto"><strong>Contenido:</strong> ${c.contenido}</p>
      <p class="contenido-texto"><strong>Orientación:</strong> ${c.orientacion}</p>
    `;

    contenedor.appendChild(bloque);
  });

  renderMathInElement(contenedor, {
    delimiters: [
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ],
    throwOnError: false
  });
}
