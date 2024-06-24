import "./styles.css";

const contenido = document.getElementById("html");
const buscarUrls = document.getElementById("boton-extraer");
const resultadosDiv = document.getElementById("respuesta");

export const obtenerUrls = (value: string) => {
  const regexImg = /<img\b[^>]*\bsrc=["']([^"']*)["'][^>]*>/gi;
  let match;
  const urls = [];

  while ((match = regexImg.exec(value)) !== null) {
    urls.push(match[1]);
  }

  urls.forEach((url) => {
    const p = document.createElement("p");
    p.textContent = url;
    if (
      resultadosDiv instanceof HTMLDivElement &&
      resultadosDiv != null &&
      resultadosDiv != undefined
    ) {
      resultadosDiv.appendChild(p);
    }
  });
};

if (
  buscarUrls instanceof HTMLButtonElement &&
  buscarUrls != null &&
  buscarUrls != undefined
) {
  buscarUrls.addEventListener("click", (event) => {
    if (
      event.target instanceof HTMLButtonElement &&
      event.target != null &&
      event.target != undefined
    ) {
      console.log("Se a presionado el boton");
      if (
        contenido instanceof HTMLTextAreaElement &&
        contenido != null &&
        contenido != undefined
      ) {
        obtenerUrls(contenido.value);
      }
    }
  });
}
