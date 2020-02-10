import React from "react";
import "./App.css";
import { RecipePage } from "./Pages/RecipePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/recipes" component={RecipePage} />
    </Router>
  );
};

export default App;
