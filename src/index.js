import React from "react";
import ReactDOM from "react-dom";

import ProtoType from "prop-types";
// Import css bootstrap and fontawesome
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/index.css";

// Import JS bootstrap jquery and popper.js
import "jquery";
import "popper.js";
import "bootstrap";

function SimpleCounter(props) {
  return (
    <div className="App">
      <div className="counter">
        <div className="icon">
          {" "}
          <i className="far fa-clock"></i>{" "}
        </div>
        <div className="hour">{props.hh}</div>
        <div className="minute">{props.mm}</div>
        <div className="second">{props.ss}</div>
        <div className="mseconds">{props.ms}</div>
      </div>
    </div>
  );
}

SimpleCounter.prototype = {
  hh: ProtoType.number,
  mm: ProtoType.number,
  ss: ProtoType.number,
  ms: ProtoType.number,
};

let cont = 0;
setInterval(function () {
  let hh = Math.floor(cont / 1000);
  let mm = Math.floor(cont / 100);
  let ss = Math.floor(cont / 10);
  let ms = Math.floor(cont / 1);
  //console.log(hh, mm, ss, ms);
  cont++;

  ReactDOM.render(
    <SimpleCounter hh={hh} mm={mm} ss={ss} ms={ms} />,
    document.getElementById("root")
  );
}, 1000);
