import React, { useState, useEffect } from "react";
import FrontPage from "pages/FrontPage";
import Fallback from "components/Fallback";
import { Routes, Route } from "react-router";
import AnotherPage from "pages/AnotherPage";

function App() {
  const [appIsShowing, setAppIsShowing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(function () {
      setAppIsShowing(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return appIsShowing ? (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/products/*" element={<AnotherPage />} />
      </Routes>
    </div>
  ) : (
    <Fallback />
  );
}

export default App;
