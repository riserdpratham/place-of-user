import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/newPlace" exact element={<NewPlace />} />
        
        {/* Redirect all other routes to the root */}
        <Route path="*" element={<Navigate to="/" />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
