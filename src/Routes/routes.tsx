import React from "react";
import {
  Redirect,
  Route as ReactRoute,
  RouteProps as ReactRouterProps,
} from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { market } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!market ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
