import * as Color from "color";

export const makeColors = (
  lc: string,
  rc: string,
  darken = false
): { leftColor: string; rightColor: string } => {
  if (darken) {
    lc = Color(lc)
      .darken(0.5)
      .hex();
    rc = Color(rc)
      .darken(0.5)
      .hex();
  }
  return {
    leftColor: lc,
    rightColor: rc
  };
};
