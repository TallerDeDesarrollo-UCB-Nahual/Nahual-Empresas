import React, { Component } from "react";
import NahualLogo from "../assets/logo-proyecto-nahual.webp";

class NavBar extends Component {
  render() {
    return (
      <>
        <div
          class="ui fixed borderless huge menu"
          style={{
            borderBottom: "solid #81ce32",
            height: 80
          }}
        >
          <div class="ui container grid">
            <div class="computer only row">
              <a>
                <img
                  src={NahualLogo}
                  width="100px"
                  style={{ marginTop: 20 }}
                  alt="Nahual"
                />
              </a>
              <a class="right item disabled" style={{ color: "#81ce32" }}>
                NAHUAL EMPRESAS
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default NavBar;
