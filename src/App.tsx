import React from "react";
import styles from "./App.module.scss";
import Header from "./components/modules/header/header";
import { HomePage } from "./components/pages/homePage/HomePage";
import { BrowserRouter } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />
          <HomePage />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;