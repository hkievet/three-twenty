/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import { Color } from "./utils";

export interface IShadedSpacerProps {
  baseHexColor: string;
}

export default function ShadedSpacer(props: IShadedSpacerProps) {
  const colors = new Array(5);
  colors[3] = Color(props.baseHexColor);
  colors[2] = Color(colors[3].hex()).darken(0.1);
  colors[1] = Color(colors[2].hex()).darken(0.1);
  colors[0] = Color(colors[1].hex()).darken(0.1);
  colors[4] = Color(colors[3].hex()).lighten(0.1);
  const colorElements = colors.map((color, i) => (
    <div
      key={i}
      css={css`
        background-color: ${color.hex()};
        height: 10px;
        width: 64px;
        display: inline-block;
      `}
    />
  ));
  // deadass if this doesn't have flex on it then all the nested divs are lower than the parent for some reason...
  return (
    <div
      css={css`
        height: 10px;
        display: flex;
      `}
    >
      {colorElements}
    </div>
  );
}
