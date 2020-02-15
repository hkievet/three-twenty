import * as React from "react";
import Spacer from "../utils/Spacer";
import GradientCircleDiv from "../div-shapes/GradientCircleDiv";
import { cssColors } from "../../emotion/colors";

export interface IUnnamedPieceProps {}

export const UnnamedPiece: React.FC<IUnnamedPieceProps> = props => {
  return (
    <div>
      <GradientCircleDiv
        leftColor={cssColors.blue}
        rightColor={cssColors.mauve}
      />
      <Spacer
        options={{
          gradient: {
            leftColor: cssColors.mauve,
            rightColor: cssColors.blue
          }
        }}
      />
      <Spacer
        options={{
          gradient: {
            rightColor: cssColors.mauve,
            leftColor: cssColors.blue
          }
        }}
      />
      <GradientCircleDiv
        leftColor={cssColors.mauve}
        rightColor={cssColors.blue}
      />
      <Spacer />
    </div>
  );
};

export default UnnamedPiece;
