//src/ App.jsx
import React from "react";
import HomePage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";
import "./App.css";

//App component serves as the root of your applications
function App() {
  return (
    <div id="container">
      <HomePage />
      <EmployeePage />
    </div>
  );
}

//Export App component for rendering in main.jsx
export default App;
