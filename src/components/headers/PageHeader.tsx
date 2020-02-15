/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import { cssColors } from "../../emotion/colors";
import Text from "../typography/Text";

export interface IPageHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  dsc?: string;
}

/**
 *
 * @deprecated Deprecated in favor of Text element
 */
export default function PageHeader(props: IPageHeaderProps) {
  const { children, ...rest } = props;
  return <Text htmlTag={"h1"}>{children}</Text>;
}
