/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import { cssColors } from "../../emotion/colors";

export interface ITextProps extends React.HTMLAttributes<HTMLDivElement> {
  emotion?: "neutral" | "happy" | "sad" | "angry" | "loud";
  codingLanguage?: "lang-tsx";
  htmlTag?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "pre"
    | "code";
  useDefaultPadding?: boolean;
}

const emotionalCssOptions = {
  neutral: css`
    font-size: 14px;
  `,
  sad: css`
    font-size: 12px;
  `,
  angry: css`
    font-size: 16px;
    font-style: italic;
  `,
  loud: css`
    font-size: 16px;
    font-weight: bold;
  `,
  happy: css`
    font-size: 14px;
  `
};

const semanticTextStyles = {
  h1: css`
    font-size: 20px;
    margin: 12px 12px;
  `,
  h2: css`
    font-size: 19px;
    margin: 12px 12px;
  `,
  h3: css`
    font-size: 18px;
    margin: 12px 12px;
  `,
  h4: css`
    font-size: 17px;
    margin: 12px 12px;
  `,
  h5: css`
    font-size: 16px;
    margin: 12px 12px;
  `,
  h6: css`
    font-size: 15px;
    margin: 12px 12px;
  `,
  pre: css`
    font-size: 12px;
    padding: 12px;
    background-color: black;
    color: ${cssColors.mauve};
    line-height: 1.5em;
  `,
  p: emotionalCssOptions.neutral,
  span: css``,
  code: css`
    font-size: 12px;
    padding: 12px;
    background-color: black;
    color: ${cssColors.mauve};
    line-height: 1.5em;
  `
};

export const Text: React.FC<ITextProps> = props => {
  const {
    emotion,
    codingLanguage,
    htmlTag = "p",
    children = null,
    useDefaultPadding = true
  } = props;

  let fontClass = "font-noah";
  let textCss = [];

  if (emotion) {
    textCss.push(emotionalCssOptions[emotion]);
  } else {
    textCss.push(semanticTextStyles[htmlTag]);
  }

  if (useDefaultPadding) {
    textCss.push(
      css`
        margin-left: 12px;
        margin-right: 12px;
      `
    );
  }

  let classNames = `${fontClass}`;

  const htmlAttrs = {
    className: classNames,
    css: textCss
  };

  if (codingLanguage) {
    return <pre {...htmlAttrs}>{children}</pre>;
  }

  switch (htmlTag) {
    case "h1":
      return <h1 {...htmlAttrs}>{children}</h1>;
    case "h2":
      return <h2 {...htmlAttrs}>{children}</h2>;
    case "h3":
      return <h3 {...htmlAttrs}>{children}</h3>;
    case "h4":
      return <h4 {...htmlAttrs}>{children}</h4>;
    case "h5":
      return <h5 {...htmlAttrs}>{children}</h5>;
    case "h6":
      return <h6 {...htmlAttrs}>{children}</h6>;
    case "span":
      return <span {...htmlAttrs}>{children}</span>;
    case "code":
      htmlAttrs.className = "font-dankmono lang-tsx";
      htmlAttrs.css.push(
        css`
          overflow: scroll;
        `
      );
      return (
        <pre {...htmlAttrs}>
          <code>{children}</code>
        </pre>
      );
    case "pre":
      htmlAttrs.className = "font-dankmono";
      htmlAttrs.css.push(
        css`
          overflow: scroll;
        `
      );
      return <pre {...htmlAttrs}>{children}</pre>;
    case "p":
    default:
      return <p {...htmlAttrs}>{children}</p>;
  }
};

export default Text;
