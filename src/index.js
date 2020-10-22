import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'semantic-ui-less/semantic.less'
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./Componentes/Login/history"

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};
ReactDOM.render(
  <Auth0Provider
    domain="dev-gl-221m2.us.auth0.com"
    clientId="F29XDMT4pvq6h1ppIlypw1YHKfiilaQR"
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    audience={"nahual-empresas/login"}

  >
    <App />
  </Auth0Provider>
  , document.getElementById("root"));
