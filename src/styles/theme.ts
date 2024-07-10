import { css } from "@emotion/react";

const typoCreator = (fontSize: string, fontWeight: number, lineHeight: string) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};

export const Theme = {
  colors: {
    Base_White: "#FFFFFF",
    Base_Black: "#000000",
    Primary_10: "#E8F2FC",
    Primary_50: "#E8F2FC",
    Primary_100: "#D1E5FA",
    Primary_200: "#A3CCF5",
    Primary_300: "#4899EA",
    Primary_400: "#4899EA",
    Primary_500: "#1A80E5",
    Primary_600: "#0B6BCB",
    Primary_700: "#0956A5",
    Primary_800: "#07427E",
    Primary_900: "#031930",
    Neutral_20: "#F8FAFB",
    Neutral_50: "#EEF2F6",
    Neutral_100: "#E1E6EB",
    Neutral_200: "#C7CCD1",
    Neutral_300: "#ABB3BB",
    Neutral_400: "#8F99A3",
    Neutral_500: "#737F8C",
    Neutral_600: "#5C6670",
    Neutral_700: "#454D55",
    Neutral_800: "#2E3338",
    Neutral_900: "#1A1A1A",

    Status_Success: "#0AC277",
    Status_Cautionary: "#FFAA00",
    Status_Negative: "#FF4262"
  },
  typo: {
    Display_S: typoCreator("36px", 600, "44px"),
    Display_M: typoCreator("48px", 600, "56px"),
    Display_L: typoCreator("56px", 600, "64px"),
    Headline_L: typoCreator("28px", 700, "38px"),
    Headline_M: typoCreator("26px", 700, "34px"),
    Headline_S: typoCreator("24px", 700, "32px"),
    Title_L: typoCreator("22px", 600, "34px"),
    Title_M: typoCreator("20px", 600, "30px"),
    Title_S: typoCreator("18px", 600, "26px"),
    Title_XS: typoCreator("16px", 600, "24px"),
    Body_XL: typoCreator("18px", 400, "28px"),
    Body_L: typoCreator("16px", 400, "24px"),
    Body_M: typoCreator("14px", 400, "22px"),
    Body_S: typoCreator("12px", 400, "18px"),
    Label_L: typoCreator("14px", 600, "18px"),
    Label_M: typoCreator("12px", 600, "16px"),
    Label_S: typoCreator("10px", 600, "14px")
  }
};

export type TColor = keyof (typeof Theme)["colors"];
export type TTypo = keyof (typeof Theme)["typo"];
