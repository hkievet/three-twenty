/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import CircleDiv from "../div-shapes/CircleDiv";
import Text from "../typography/Text";

export interface INumberDisplayProps {
  number: number;
  color: string;
}

export default function NumberDisplay(props: INumberDisplayProps) {
  return (
    <CircleDiv
      color={"#000000"}
      css={css`
        background-color: ${props.color};
        justify-content: center;
        align-items: center;
      `}
    >
      <Text>{props.number}</Text>
    </CircleDiv>
  );
}
