import React from "react";
import { Redirect, Route } from "react-router-dom";

// https://www.sitepoint.com/react-router-complete-guide/
const PrivateRoute = ({ user, component: Component, ...rest }) => {

  return (
    <Route {...rest}>
      {user ?
        <Component user={user}/>
      :
        <Redirect to={{ pathname: "/login" }} />
      }
    </Route>
  );
};

export default PrivateRoute;