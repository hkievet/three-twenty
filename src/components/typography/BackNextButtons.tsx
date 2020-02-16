import * as React from "react";
import ThreeTwentyLink from "./ThreeTwentyLink";
import StringDisplay from "../primitives-shapes/StringDisplay";
import HalfColumnContainer from "../containers/HalfColumnContainer";

export interface IBackNextButtonsProps {
  backTo?: string;
  forwardTo?: string;
}

export default function BackNextButtons(props: IBackNextButtonsProps) {
  let backButton, forwardButton;
  if (props.backTo !== undefined) {
    backButton = (
      <ThreeTwentyLink to={props.backTo}>
        <StringDisplay text={"< Back"} color={"#000000"} hoverEffect="mauve" />
      </ThreeTwentyLink>
    );
  }
  if (props.forwardTo !== undefined) {
    forwardButton = (
      <div>
        <ThreeTwentyLink to={props.forwardTo}>
          <StringDisplay
            text={"Next >"}
            color={"#000000"}
            hoverEffect="mauve"
          />
        </ThreeTwentyLink>
      </div>
    );
  }
  return (
    <div>
      <HalfColumnContainer>{backButton}</HalfColumnContainer>
      <HalfColumnContainer>{forwardButton}</HalfColumnContainer>
    </div>
  );
}
