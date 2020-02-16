import * as React from "react";
import ThreeTwentyContainer from "../containers/ThreeTwentyContainer";
import { Global, css, jsx } from "@emotion/core";
import BackNextButtons from "../typography/BackNextButtons";

import { threeTwentyPages } from "../../data/pages";
import Text from "../typography/Text";
import PageHeader from "../headers/PageHeader";
import Spacer from "../utils/Spacer";
import ShadedSpacer from "../utils/ShadedSpacer";
import { cssColors } from "../../emotion/colors";

export interface ITestPageProps {}

export const TestPage: React.FC<ITestPageProps> = props => {
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
      <PageHeader>ThreeTwenty Roadmap</PageHeader>
      <Text></Text>
      <BackNextButtons />
      <Spacer />
      <BackNextButtons
        forwardTo={threeTwentyPages.roadmap.forwardTo}
        backTo={threeTwentyPages.roadmap.backTo}
      />
      <Spacer />
      <ShadedSpacer baseHexColor={cssColors.purple} />
    </ThreeTwentyContainer>
  );
};

export default TestPage;
