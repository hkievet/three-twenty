/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import { Global } from "@emotion/core";
import ThreeTwentyContainer from "../containers/ThreeTwentyContainer";
import Text from "../typography/Text";
import Markdown from "markdown-to-jsx";

const markdownToJsxOptions: any = {
  overrides: {
    h1: {
      component: Text,
      props: {
        htmlTag: "h1"
      }
    },
    p: {
      component: Text
    }
  }
};

export interface IMarkdownTemplateProps {
  markdownString: string;
}

const wrapMarkup = (html: any) => ({
  __html: html
});

export const MarkdownTemplate: React.FC<IMarkdownTemplateProps> = props => {
  console.log(props.markdownString);
  return (
    <ThreeTwentyContainer>
      <Global
        styles={css`
          body {
            background-color: black;
          }
        `}
      />
      <Markdown options={markdownToJsxOptions}>{props.markdownString}</Markdown>
    </ThreeTwentyContainer>
  );
};

export default MarkdownTemplate;
