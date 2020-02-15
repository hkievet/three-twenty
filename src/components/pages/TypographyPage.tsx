/** @jsx jsx */
import * as React from "react";
import Spacer from "../utils/Spacer";
import ThreeTwentyContainer from "../containers/ThreeTwentyContainer";
import { Global, css, jsx } from "@emotion/core";
import BackNextButtons from "../typography/BackNextButtons";

// import img from "../../Adobe/2020\ typeface\ concept-01.svg";
import { threeTwentyPages } from "../../data/pages";
import GradientSpacer from "../art-molecules/GradientSpacer";
import { cssColors } from "../../emotion/colors";
import ShadedSpacer from "../utils/ShadedSpacer";
import PageHeader from "../headers/PageHeader";
import Text from "../typography/Text";
export interface ITypographyPageProps {}

export default function TypographyPage(props: ITypographyPageProps) {
  return (
    <ThreeTwentyContainer>
      <Global
        styles={css`
          body {
            background-color: black;
          }
        `}
      />
      <ShadedSpacer baseHexColor={cssColors.pink} />
      <PageHeader>Typography</PageHeader>
      <Text>Observe ThreeTwenty's typographical concept art:</Text>
      {/*Todo: make this whole thing into an "SVG Spacer" */}
      <div
        css={css`
          font-size: 0;
        `}
      >
        <GradientSpacer colors={[cssColors.white, cssColors.black]} />
        <GradientSpacer colors={[cssColors.black, cssColors.white]} />
      </div>
      <Spacer />
      <Text htmlTag={"h2"}>Emotions</Text>
      <Text>These could be neat, who knows at this point.</Text>
      <Text emotion={"angry"}>Angry</Text>
      <Text emotion={"loud"}>Loud</Text>
      <Text emotion={"happy"}>Happy</Text>
      <Text emotion={"neutral"}>Neutral</Text>
      <Text emotion={"sad"}>Sad</Text>

      <Spacer />

      <Text htmlTag={"h2"}>Semantic</Text>
      <Text>Emotional styling will override semantic styling.</Text>
      <Text htmlTag={"h1"}>Header One</Text>
      <Text htmlTag={"h2"}>Header Two</Text>
      <Text htmlTag={"h3"}>Header Three</Text>
      <Text htmlTag={"h4"}>Header Four</Text>
      <Text htmlTag={"h5"}>Header Five</Text>
      <Text htmlTag={"h6"}>Header Six</Text>

      <Spacer />
      <Text htmlTag={"h2"}>Code</Text>
      <Text>Todo: hook up Prism syntax highlighter.</Text>
      <Text htmlTag={"code"}>{`<Text emotion={"angry"}>Angry</Text>
<Text emotion={"loud"}>Loud</Text>
<Text emotion={"happy"}>Happy</Text>
<Text emotion={"neutral"}>Neutral</Text>
<Text emotion={"sad"}>Sad</Text>
<Text htmlTag={"h1"}>Header One</Text>
<Text htmlTag={"h2"}>Header Two</Text>
<Text htmlTag={"h3"}>Header Three</Text>
<Text htmlTag={"h4"}>Header Four</Text>
<Text htmlTag={"h5"}>Header Five</Text>
<Text htmlTag={"h6"}>Header Six</Text>`}</Text>
      <Spacer />
      <Spacer />

      <BackNextButtons
        backTo={threeTwentyPages.typography.backTo}
        forwardTo={threeTwentyPages.typography.forwardTo}
      />
      <Spacer />
      <ShadedSpacer baseHexColor={cssColors.green} />
    </ThreeTwentyContainer>
  );
}
