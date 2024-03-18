let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};
export const setRoutes = (routes) => {
  if (typeof routes === "object") {
    if (routes["/error"]){
      ROUTES = routes;
    }
  } 
};
export const queryStringToObject = (queryString) => {
  const textSearch = new URLSearchParams(queryString);
  const objSearch = Object.fromEntries(textSearch);
  return objSearch;

};
export const renderView = (pathname, props ={}) => {
  rootEl.innerHTML = "";

};
export const navigateTo = (pathname, props ={}) => {};
export const onURLChange = (location) => {};
