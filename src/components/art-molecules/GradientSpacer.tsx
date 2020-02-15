import * as React from "react";
import GradientCircleDiv from "../div-shapes/GradientCircleDiv";
import { cssColors } from "../../emotion/colors";
import Spacer from "../utils/Spacer";

export interface IGradientSpacerProps {
  colors: string[];
}

export default function GradientSpacer(props: IGradientSpacerProps) {
  const rainbow = props.colors.flatMap((color, i) => {
    if (i === props.colors.length - 1) return;
    const firstColor = color;
    const lastColor = props.colors[i + 1];
    return (
      <Spacer
        key={i}
        options={{
          gradient: {
            leftColor: firstColor,
            rightColor: lastColor
          }
        }}
      />
    );
  });
  return <div>{rainbow}</div>;
}
