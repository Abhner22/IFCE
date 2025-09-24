// Função f(x) = cos(x) - sin²(x) + 1
function f(x) {
  return Math.cos(x) - Math.pow(Math.sin(x), 2) + 1;
}

function bisseccao() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let resultado = document.getElementById("resultado");
  resultado.textContent = "";

  if (f(a) * f(b) >= 0) {
    resultado.textContent = "Erro: f(a) e f(b) devem ter sinais opostos.";
    return;
  }

  let passos = "";
  let meio;

  for (let i = 1; i <= 15; i++) {
    meio = (a + b) / 2;
    passos += `Iteração ${i}: a=${a.toFixed(6)}, b=${b.toFixed(6)}, m=${meio.toFixed(6)}, f(m)=${f(meio).toFixed(6)}\n`;

    if (f(meio) === 0) break;

    if (f(a) * f(meio) < 0) {
      b = meio;
    } else {
      a = meio;
    }
  }

  passos += `\nAproximação da raiz após 15 iterações: x ≈ ${meio.toFixed(10)}`;
  resultado.textContent = passos;
}