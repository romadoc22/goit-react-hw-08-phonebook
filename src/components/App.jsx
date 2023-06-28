import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "redux/auth/selectors";
import { refreshUser } from "redux/auth/operations";
import Layout from "./Layout";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route 
          path="/register" 
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          } />
          <Route 
          path="/login" 
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          } />
          <Route 
          path="/contacts" 
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          } />
        </Route>        
      </Routes>
  );
};

export default App;
