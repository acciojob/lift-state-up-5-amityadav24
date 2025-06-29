import React, { useState } from "react";
import LoginForm from "./LoginForm";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}
      {isLoggedIn ? (
        <h1>You are logged in!</h1>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
