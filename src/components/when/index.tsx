import { FC, Fragment, PropsWithChildren, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface VisibleRouteProps {
  condition: boolean;
  fallback?: ReactNode;
}

export const When: FC<PropsWithChildren<VisibleRouteProps>> = ({
  condition,
  children,
  fallback = <Outlet />
}) => <Fragment>{condition ? children : fallback}</Fragment>;
