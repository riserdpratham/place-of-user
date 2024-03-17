import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";


const App = () => {

  // set the state of flag
  const [isMobile, setIsMobile] = useState(false);

  // this hook for onMount of element to DOM
  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  return (
    <Router>
      <MainNavigation isMobileDevice={isMobile} />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/places/new" exact element={<NewPlace />} />
          <Route path="/:userId/places" exact element={<UserPlaces />} />
          {/* Redirect all other routes to the root */}
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
