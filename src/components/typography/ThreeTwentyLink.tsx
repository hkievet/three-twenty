import * as React from "react";
import { useRouteMatch, NavLink } from "react-router-dom";

export interface IThreeTwentyLinkProps
  extends React.HTMLAttributes<HTMLLinkElement> {
  to: string;
}

export default function ThreeTwentyLink(props: IThreeTwentyLinkProps) {
  const { to, children, ...rest } = props;
  const { path } = useRouteMatch();
  const sections = path.split("/");
  console.log(sections[1]);
  let url = "";
  if (!sections[1]) {
    url = `${to}`;
  } else {
    url = `/${to}`;
  }
  console.log(to);
  console.log(url);

  return (
    <NavLink to={props.to} style={{ textDecoration: "none" }}>
      {children}
    </NavLink>
  );
}
