import * as React from "react";
import Spacer from "../utils/Spacer";
import Paragraph from "../typography/Paragraph";
import NumberDisplay from "../primitives-shapes/NumberDisplay";
import ShadedSpacer from "../utils/ShadedSpacer";
import { cssColors } from "../../emotion/colors";
import GradientCircleDiv from "../div-shapes/GradientCircleDiv";
import CircleDiv from "../div-shapes/CircleDiv";
import ThreeTwentyContainer from "../containers/ThreeTwentyContainer";
import { Global, css } from "@emotion/core";
import * as Color from "color";
import BackNextButtons from "../typography/BackNextButtons";
import PageHeader from "../headers/PageHeader";

export interface ICirclePageProps {}

export default function CirclePage(props: ICirclePageProps) {
  return (
    <ThreeTwentyContainer>
      <Global
        styles={css`
          body {
            background-color: black;
          }
        `}
      />
      <ShadedSpacer baseHexColor={cssColors.mauve} />
      <Spacer />
      <PageHeader>Circles & Spacers</PageHeader>
      <Paragraph>This is a mauve circle.</Paragraph>
      <Spacer />
      <CircleDiv color={cssColors.mauve} />
      <Spacer />
      <ShadedSpacer baseHexColor={cssColors.orange} />
      <Spacer />
      <Paragraph>
        This is a number displayed within a darkened orange.
      </Paragraph>
      <Spacer />
      <NumberDisplay
        color={Color(cssColors.orange)
          .darken(0.5)
          .hex()}
        number={320}
      />
      <Spacer />
      <Paragraph>Radical!</Paragraph>
      <Spacer />
      <ShadedSpacer baseHexColor={cssColors.green} />
      <Spacer />
      <Paragraph>GradientCircleDiv:</Paragraph>
      <Spacer />
      <GradientCircleDiv
        leftColor={cssColors.green}
        rightColor={cssColors.blue}
      />
      <Spacer />
      <ShadedSpacer baseHexColor={cssColors.blue} />
      <Spacer />
      <BackNextButtons backTo={""} forwardTo={"/art"} />
      <Spacer />
      <ShadedSpacer baseHexColor={cssColors.aqua} />
    </ThreeTwentyContainer>
  );
}
