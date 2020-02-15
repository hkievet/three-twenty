/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import Text from "./Text";

export interface IParagraphProps {
  children?: React.ReactNode;
}

/**
 * @deprecated since the <Text> component was created
 */
export default function Paragraph(props: IParagraphProps) {
  return <Text htmlTag={"p"}>{props.children}</Text>;
}
