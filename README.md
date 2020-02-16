# ThreeTwenty

This is a handmade component library (currently very prototypal).

I wanted to created a collection of UI elements that I can easily reuse for my projects.

- All elements fit within 320px
- Allow for reuse in other projects
- All CSS besides font classes must be doen with emotion

## Installation

`yarn add three-twenty`

## Adding the Noah font:

`import "../node_modules/three-twenty/build/assets/public_fonts/noah.scss";`

## Example

(Super trivial... I don't have a public facing documentation for everything (yet))

```
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "../node_modules/three-twenty/build/assets/public_fonts/noah.scss";
import { Global } from "@emotion/core";
import { cssColors } from "./emotion/colors";

export interface IMainMenuProps {}
import {
  ThreeTwentyContainer,
  ShadedSpacer,
  PageHeader,
  Spacer
} from "three-twenty";

export default function ArtPage(props: IMainMenuProps) {
  return (
    <ThreeTwentyContainer>
      {" "}
      <Global
        styles={css`
          body {
            background-color: black;
          }
        `}
      />
      <ShadedSpacer baseHexColor={cssColors.yellow} />
      <Spacer />
      <PageHeader dsc={cssColors.yellow}>Art Page</PageHeader>
      <Spacer />
    </ThreeTwentyContainer>
  );
}
```

## Synopsis

I wanted to create a dumb little component library. Here it is.

I learned a little bit about rollup and publishing to npm in the process.

The foundational idea behind wanting to make this was the idea proposed in The Mythical Man Month that conceptual integrity is highest when a system is architected by a single person.
So I laid down a foundation through this three-twenty package.

## Demo

[demo url][]

[demo url]: https://hkievet.com/three
