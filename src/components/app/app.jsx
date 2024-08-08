import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import { selectUserLoading } from "../../services/user/reducer";

import styles from "./app.module.css";

import Header from "../header/header";

import Profile from "../../pages/profile/profile";
import Diagram from "../../pages/diagram/diagram";
import Company from "../../pages/company/company";
import Catalog from "../../pages/catalog/catalog";

import Preloader from "../preloader/preloader";

import { loadUser } from "../../services/user/actions";

function App() {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(selectUserLoading);
  const isLoading = isUserLoading;

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && <Preloader />}
      <Header />

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/company" element={<Company />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
