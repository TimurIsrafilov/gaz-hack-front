import { Navigate, useLocation } from "react-router-dom";

import Modal from "../modal/modal";
import Preloader from "../preloader/preloader";

import { useSelector } from "react-redux";

const Protected = ({ onlyUnAuth = false, component }) => {
  const location = useLocation();

  const user = useSelector((state) => state.user.user);
  const isAuthChecked = useSelector((state) => state.user.isAuthChecked);
  const isUserLoading = useSelector((state) => state.user.loading);

  if (!isAuthChecked) {
    return (
      <Modal isLoading={!isUserLoading}>
        <Preloader />
      </Modal>
    );
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = Protected;

export const OnlyUnAuth = ({ component }) => (
  <Protected onlyUnAuth={true} component={component} />
);
