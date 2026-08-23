// app.js

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenido");
  // Por ahora renderizamos Tema 1 directo, sin esperar clic de navegación.
  // La navegación funcional entre los 5 temas se conecta en el Paso 4.
  renderTema(1, contenedor);
});

// Formatea el id interno (ej. "1.2a") para mostrarlo como "1.2 (a)".
// El id interno NO cambia — esto es solo presentación visual.
function formatearId(id) {
  const match = id.match(/^(\d+\.\d+)([a-z])?$/);
  if (!match) return id;
  const [, numero, letra] = match;
  return letra ? `${numero} (${letra})` : numero;
}

function renderTema(temaNum, contenedor) {
  const formulas = FORMULAS.filter(f => f.tema === temaNum);

  contenedor.innerHTML = "";

  if (formulas.length === 0) {
    contenedor.innerHTML = '<p class="placeholder">Este tema todavía no tiene contenido.</p>';
    return;
  }

  formulas.forEach(f => {
    const bloque = document.createElement("div");
    bloque.className = "formula-bloque";

    bloque.innerHTML = `
      <div class="formula-encabezado">
        <span class="formula-id">${formatearId(f.id)}</span>
        <span class="formula-nombre">${f.nombre}</span>
      </div>
      <div class="formula-latex">\\[${f.latex}\\]</div>
      ${f.notas ? `<p class="formula-notas">${f.notas}</p>` : ""}
    `;

    contenedor.appendChild(bloque);
  });

  // Renderiza todo el LaTeX insertado dentro de #contenido
  renderMathInElement(contenedor, {
    delimiters: [
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ],
    throwOnError: false
  });
}
