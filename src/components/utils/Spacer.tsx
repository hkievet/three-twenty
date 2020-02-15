/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import { makeColors } from "./utils";

export interface ISpacerOptions {
  gradient?: {
    leftColor: string;
    rightColor: string;
    darken?: boolean;
  };
}

export interface ISpacerProps {
  options?: ISpacerOptions;
}

export default function Spacer(props: ISpacerProps) {
  const { options } = props;
  if (options) {
    if (options.gradient) {
      const colors = makeColors(
        options.gradient.leftColor,
        options.gradient.rightColor,
        options.gradient.darken
      );
      return (
        <div
          css={css`
            height: 12px;
            background-image: linear-gradient(
              ${colors.leftColor},
              ${colors.rightColor}
            );
          `}
        />
      );
    }
  }
  return (
    <div
      css={css`
        height: 12px;
      `}
    />
  );
}
