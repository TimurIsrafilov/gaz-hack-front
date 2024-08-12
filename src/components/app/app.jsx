import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import styles from "./app.module.css";

import Header from "../header/header";
import Profile from "../../pages/profile/profile";
import Diagram from "../../pages/diagram/diagram";
import Company from "../../pages/company/company";
import Catalog from "../../pages/catalog/catalog";
import Preloader from "../preloader/preloader";
import Login from "../../pages/login/login";
import Modal from "../modal/modal";

import { loadUser } from "../../services/user/actions";
import { selectUserLoading } from "../../services/user/reducer";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";

function App() {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(selectUserLoading);
  const isLoading = isUserLoading;

  const location = useLocation();

  useEffect(() => {
    dispatch(loadUser("1"));
  }, []);

  return (
    <div className={styles.page}>
      {/* {isLoading && (
        <Modal isLoading={isLoading}>
          <Preloader />
        </Modal>
      )} */}

      {location.pathname !== "/login" ? <Header /> : ""}

      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
        {/* <Route path="/profile" element={<Profile />} /> */}

        <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
        <Route path="/profile" element={<OnlyAuth component={<Profile />} />} />
        <Route path="/diagram" element={<OnlyAuth component={<Diagram />} />} />
        <Route path="/company" element={<OnlyAuth component={<Company />} />} />
        <Route path="/catalog" element={<OnlyAuth component={<Catalog />} />} />
      </Routes>
    </div>
  );
}

export default App;
