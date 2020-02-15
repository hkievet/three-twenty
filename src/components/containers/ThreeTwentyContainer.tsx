/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";

export interface IThreeTwentyContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function ThreeTwentyContainer(
  props: IThreeTwentyContainerProps
) {
  const { children, ...rest } = props;
  return (
    <div
      {...rest}
      css={css`
        max-width: 320px;
        margin: 0 auto;
        background-color: white;
      `}
    >
      {children}
    </div>
  );
}
