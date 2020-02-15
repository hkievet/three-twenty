import * as React from "react";

import CirclePage from "../components/pages/CirclePage";
import ArtPage from "../components/pages/ArtPage";
import TypographyPage from "../components/pages/TypographyPage";
import WelcomePage from "../components/pages/WelcomePage";
import RoadMapPage from "../components/pages/RoadMapPage";

// !! disables all loaders and then custom loaders are defined thereafter.  right here I only want to use the raw-loader on the file so the normal markdown-loader/html-loader aren't ran on the file
import content from "!!raw-loader!../data/text.md";
import MarkdownTemplate from "../components/templates/MarkdownTemplate";

/**
 * key value is the url slug
 * // idea: Unless .url is set
 */
export const threeTwentyPages = {
  intro: {
    component: <WelcomePage />,
    forwardTo: "/roadmap"
  },
  circles: {
    component: <CirclePage />,
    backTo: "/",
    forwardTo: "/typography"
  },
  art: {
    component: <ArtPage />,
    backTo: "/circles",
    forwardTo: "/typography"
  },
  typography: {
    component: <TypographyPage />,
    backTo: "/roadmap",
    forwardTo: "/intro"
  },
  roadmap: {
    component: <RoadMapPage />,
    backTo: "/intro",
    forwardTo: "/typography"
  },
  markdown: {
    component: <MarkdownTemplate markdownString={content} />
  }
};

export interface IRoute {
  component: JSX.Element;
  backTo?: string; // I would love to do something like `keyof typeof threeTwentyPages;`
  forwardTo?: string;
}
