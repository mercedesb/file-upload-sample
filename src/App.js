import React from "react";
import { SampleForm } from "components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        File upload sample{" "}
        <span role="img" aria-label="hugging face">
          🤗
        </span>
      </header>
      <main>
        <SampleForm />
      </main>
    </div>
  );
}

export default App;
