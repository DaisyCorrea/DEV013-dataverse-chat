export const error = () => {
  const viewEl = document.createElement("div");
  viewEl.textContent = "Error 404";
  return viewEl;
}