/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";

export interface IHalfColumnContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function HalfColumnContainer(props: IHalfColumnContainerProps) {
  const { children, ...rest } = props;
  return (
    <div
      {...rest}
      css={css`
        min-width: 50%;
        width: 50%;
        display: inline-block;
      `}
    >
      {children}
    </div>
  );
}
