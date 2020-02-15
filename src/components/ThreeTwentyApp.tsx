/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import * as React from "react";
import { Switch, Route, useRouteMatch, Router } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import { threeTwentyPages, IRoute } from "../data/pages";
export interface IThreeTwentyAppProps {}
import "../assets/fonts/fonts.scss";
import "../assets/reset.scss";
import { createBrowserHistory } from "history";

const makeLinksSimple = (pages: typeof threeTwentyPages) => {
  const routeElements = Object.keys(pages).map(
    (pageName: keyof typeof threeTwentyPages, i) => {
      const page = pages[pageName];
      return (
        <Route key={i} exact path={`/${pageName}`}>
          {page.component}
        </Route>
      );
    }
  );
  return routeElements;
};

export default function ThreeTwentyApp(props: IThreeTwentyAppProps) {
  /**
   * Dynamically make the Route elements for each page only
   * when the  path changes by utilizing useEffect.
   */
  /**
   * make links for each page (simplifies data structrue)
   */
  const routes = makeLinksSimple(threeTwentyPages);
  console.log(routes);
  return (
    <React.Suspense fallback>
      <Router history={createBrowserHistory()}>
        <Switch>
          {routes}
          <Route>
            <WelcomePage />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}
