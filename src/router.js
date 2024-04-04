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
  console.log("🚀 ~ queryStringToObject ~ queryParams:", queryParams)
  for (const [key, value] of urlParams) {
    queryParams[key] = value;
  }
  return queryParams; // Devolver el objeto
};

export const renderView = (pathname, props = {}) => {
  const root = rootEl;
  let view;
  root.innerHTML = "";
  if (ROUTES[pathname]) {
    view = ROUTES[pathname](props);
  } else {
    view = ROUTES["/error"](props);
  }
  root.appendChild(view);
};

export const navigateTo = (pathname, props = {}) => {
 history.pushState({}, "", pathname);
 const apartRoot = pathname.split("?");
 pathname = apartRoot[0];
 props = apartRoot[1];
 const propsObject = queryStringToObject(props);
 

  // const searchParams = new URLSearchParams();
  // Object.entries(props).forEach(([key, value]) => {
  //   console.log("🚀 ~ Object.entries ~ props:", props)
  //   searchParams.set(key, value);
  // });
  // console.log("🚀 ~ navigateTo ~ searchParams:", searchParams)
  // const queryString = searchParams.toString();
  // console.log("🚀 ~ navigateTo ~ queryString:", queryString)

  // const URLvisited = `${pathname}${queryString ? `?${queryString}` : ""}`;
  // // console.log("guarda", window.location.origin + pathname);
  // console.log("🚀 ~ navigateTo ~ URLvisited:", URLvisited)
 // history.pushState({ pathname, props }, "", URLvisited);
  renderView(pathname, propsObject);
};

export const onURLChange = (location) => {
  // const pathname = window.location.pathname;
  const newProps = queryStringToObject(window.location.search);
  renderView(location, newProps);
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
};
