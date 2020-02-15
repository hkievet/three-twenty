import * as React from "react";
import Spacer from "../utils/Spacer";
import ShadedSpacer from "../utils/ShadedSpacer";
import { cssColors } from "../../emotion/colors";
import ThreeTwentyContainer from "../containers/ThreeTwentyContainer";
import { Global, css } from "@emotion/core";
import BackNextButtons from "../typography/BackNextButtons";
import PageHeader from "../headers/PageHeader";
import GradientSpacer from "../art-molecules/GradientSpacer";
import UnnamedPiece from "../art-molecules/UnnamedPiece";
import { threeTwentyPages } from "../../data/pages";

export interface IArtPageProps {}

export default function ArtPage(props: IArtPageProps) {
  const orderedColors = [
    cssColors.orange,
    cssColors.yellow,
    cssColors.green,
    cssColors.blue,
    cssColors.mauve,
    cssColors.pink
  ];
  const orderedColors2 = [...orderedColors].reverse();
  return (
    <ThreeTwentyContainer>
      <Global
        styles={css`
          body {
            background-color: black;
          }
        `}
      />
      <ShadedSpacer baseHexColor={cssColors.yellow} />
      <Spacer />
      <PageHeader dsc={cssColors.yellow}>Art Page</PageHeader>
      <Spacer />

      <UnnamedPiece />
      <Spacer />
      <GradientSpacer colors={orderedColors} />
      <GradientSpacer colors={orderedColors2} />
      <Spacer />
      <ShadedSpacer baseHexColor={cssColors.blue} />
      <Spacer />
      <BackNextButtons
        forwardTo={threeTwentyPages.art.forwardTo}
        backTo={threeTwentyPages.art.backTo}
      />
      <Spacer />
      <ShadedSpacer baseHexColor={cssColors.aqua} />
    </ThreeTwentyContainer>
  );
}
