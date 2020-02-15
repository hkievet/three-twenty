/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import * as Color from "color";
import { makeColors } from "../utils/utils";

export interface IgGradientCircleDivProps
  extends React.HTMLAttributes<HTMLDivElement> {
  leftColor: string; // a good old hex string baby
  rightColor: string; // a good old hex string baby
  children?: React.ReactNode;
  darken?: boolean;
}

export default function GradientCircleDiv(props: IgGradientCircleDivProps) {
  const { children, darken, leftColor, rightColor, ...rest } = props;
  const colors = makeColors(leftColor, rightColor, darken);
  return (
    <div>
      <div
        css={[
          css`
            height: 80px;
            width: 80px;
            border-radius: 50%;
            margin: 0 auto;
            color: white;
            display: flex;
            background-image: linear-gradient(
              ${colors.leftColor},
              ${colors.rightColor}
            );
          `
        ]}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
