import * as React from "react";
import Spacer from "../utils/Spacer";
import ThreeTwentyContainer from "../containers/ThreeTwentyContainer";
import { Global, css } from "@emotion/core";
import ShadedSpacer from "../utils/ShadedSpacer";
import PageHeader from "../headers/PageHeader";
import Paragraph from "../typography/Paragraph";
import { cssColors } from "../../emotion/colors";
import ThreeTwentyLink from "../typography/ThreeTwentyLink";
import StringDisplay from "../primitives-shapes/StringDisplay";
import BackNextButtons from "../typography/BackNextButtons";
import { threeTwentyPages } from "../../data/pages";

export interface IWelcomePageProps {}

export default function WelcomePage(props: IWelcomePageProps) {
  return (
    <ThreeTwentyContainer>
      <Global
        styles={css`
          body {
            background-color: black;
          }
        `}
      />
      <ShadedSpacer baseHexColor={cssColors.blue} />
      <Spacer />
      <PageHeader dsc={cssColors.blue}>Welcome</PageHeader>
      <Paragraph>
        This is my work-in-progress component library which I refer to as
        ThreeTwenty.
      </Paragraph>
      <Spacer />
      <Paragraph>
        The essential architectural goal of this styleguide is to create good
        looking components that fit within 320px. That number is chosen because
        it is the smallest (common) width of phones on the market as of 2020.
        IE11 is not supported.
      </Paragraph>
      <Spacer />
      <Paragraph>
        The implementation design has a few guidelines. CSS should be set with
        in-code CSS using the emotion library. All components should be made
        with React and written in Typescript.
      </Paragraph>
      <Spacer />
      <Spacer />
      <BackNextButtons forwardTo={threeTwentyPages.intro.forwardTo} />
      <Spacer />
      <ShadedSpacer baseHexColor={cssColors.mauve} />
    </ThreeTwentyContainer>
  );
}
