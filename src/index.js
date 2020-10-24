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
    domain="dev-0563c-jv.us.auth0.com"
    clientId="S061jKAzilYURqj7BchMiDioFPWXI5y7"
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>
  , document.getElementById("root"));
