import React from "react";
import "./CometHeader.css";
import cometLogo from "../../../assets/images/comet_logo.png";

export default function CometHeader(): JSX.Element {
  return (
    <header className="Comet-header" data-testid="comet-header">
      <div>
        <img id="comet-header-logo" src={cometLogo} alt="Comet App logo" />
      </div>
    </header>
  );
}
