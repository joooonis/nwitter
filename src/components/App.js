import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

function App() {
  console.log(authService.currentUser);

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <h1>HELLO WORLD!</h1>
      <h2>HELLO WORLD!</h2>

      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );

}

export default App;
