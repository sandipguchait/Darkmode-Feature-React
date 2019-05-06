import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const handletoggle = () => {
    //using previous state to update the toggle
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <button onClick={handletoggle}>Toggle Mode</button>
        </div>
      </nav>
      <main>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <h2>Toggle for dark Mode</h2>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
