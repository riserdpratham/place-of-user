import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/newPlace" exact element={<NewPlace />} />
          {/* Redirect all other routes to the root */}
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
