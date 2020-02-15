/** @jsx jsx */
import { css, jsx, InterpolationWithTheme } from "@emotion/core";
import * as React from "react";
import CircleDiv from "../div-shapes/CircleDiv";
import { cssColors } from "../../emotion/colors";
import Text from "../typography/Text";

export interface IStringDisplayProps {
  text: string;
  color: string;
  hoverEffect?: "bold" | "mauve";
}

export default function StringDisplay(props: IStringDisplayProps) {
  let extraCss;
  if (props.hoverEffect === "bold") {
    extraCss = css`
      &:hover {
        font-weight: bold;
      }
    `;
  } else if (props.hoverEffect === "mauve") {
    extraCss = css`
      transition: 0.3s;
      text-decoration: none;
      &:hover {
        color: ${cssColors.mauve};
      }
    `;
  }
  return (
    <CircleDiv
      color={"#000000"}
      css={css`
        ${extraCss};
        background-color: ${props.color};
        justify-content: center;
        align-items: center;
      `}
    >
      <Text>{props.text}</Text>
    </CircleDiv>
  );
}
