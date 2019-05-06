import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(getinitialMode());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  //Mode when app Starts
  function getinitialMode() {
    //we get the mode from localStorage
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  const handletoggle = () => {
    //using previous state to update the toggle
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={handletoggle}
              type="checkbox"
              className="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>
      <main>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <h2>Toggle for {darkMode ? "Light Mode" : "Dark Mode"}</h2>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
