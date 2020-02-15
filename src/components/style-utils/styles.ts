import { css } from "@emotion/core";

/**
 *
 * @param colors between one and four colors
 */
function applyColorBorder(colors: string[]) {
  if (colors.length === 0) {
    console.error("colors was empty");
  } else if (colors.length > 4) {
    console.error("more than four colors passed into applyColorBorder");
  }
  return css``;
}
