export const footer = () => {
  const footerEl = document.createElement("footer");
  footerEl.setAttribute("id", "footer")
  footerEl.innerHTML = `
  Copyright @ 2024 Addis Pérez & Daisy Correa
  `
  return footerEl;
}