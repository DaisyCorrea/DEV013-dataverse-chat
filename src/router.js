let ROUTES = {};
let rootEl = "";

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes === "object") {
    if (routes["/error"]) {
      ROUTES = routes;
    }
  }
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
};

export const queryStringToObject = (queryString) => {
  const urlParams = new URLSearchParams(queryString);
  const queryParams = {}; //// Convertir URLSearchParams a un objeto
  for (const [key, value] of urlParams) {
    queryParams[key] = value;
  }
  return queryParams; // Devolver el objeto
};

const renderView = (pathname, props = {}) => {
  // Limpiar root
  const root = rootEl;
  root.innerHTML = "";
  let template;

  if (ROUTES[pathname]) {
    template = ROUTES[pathname];
  } else {
    template = ROUTES["/error"];
  }
  
  const elementView = template(props);
  root.appendChild(elementView);

};

export const navigateTo = (pathname, props = {}) => {
  if (props.id) {
    const newURL = `${pathname}?id=${props.id}`;
    window.history.pushState({}, "", newURL);
  } else {
    window.history.pushState({}, "", pathname);
  }
  renderView(pathname, props);
  // update window history with pushState
  // render the view with the pathname and props
};

export const onURLChange = () => {
  const pathname = window.location.pathname;
  const newProps = queryStringToObject(window.location.search);
  renderView(pathname, newProps);
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
};
