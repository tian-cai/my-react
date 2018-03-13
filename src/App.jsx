import React from "react";
import logo from "./assets/logo.svg";
import Hello from "./modules/example/Hello.jsx";
import "./style/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <img
          src={logo}
          width="200"
          height="200"
          style={{ verticalAlign: "middle" }}
        />
        <Hello />
      </div>
    );
  }
}

export default App;
