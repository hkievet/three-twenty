/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";

export interface ICircleDivProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string; // a good old hex string baby
  children?: React.ReactNode;
}

export default function CircleDiv(props: ICircleDivProps) {
  const { children, color, ...rest } = props;
  return (
    <div>
      <div
        css={[
          css`
            height: 80px;
            width: 80px;
            background-color: ${color};
            border-radius: 50%;
            margin: 0 auto;
            color: white;
            display: flex;
          `
        ]}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
