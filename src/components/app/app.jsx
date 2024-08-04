import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import { selectUserLoading } from "../../services/user/reducer";

import Header from "../header/header";

import styles from "./app.module.css";
import Main from "../main/main";
import Profile from "../profile/profile";

import { loadUser } from "../../services/user/actions";
import Preloader from "../preloader/preloader";
import Diagram from "../diagram/diagram";
import Company from "../company/company";

function App() {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(selectUserLoading);
  const isLoading = isUserLoading;

  useEffect(() => {
    dispatch(loadUser())
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && <Preloader />}
      <Header />
      {/* <Main /> */}

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </div>
  );
}

export default App;


