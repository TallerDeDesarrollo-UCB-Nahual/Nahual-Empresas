import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'semantic-ui-less/semantic.less'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <Auth0Provider
    domain="dev-70lwkuxn.us.auth0.com"
    clientId="svxsg0b0LzERbFzx0VYHrEmqobv0hd7g"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  , document.getElementById("root"));
