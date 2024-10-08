import { css } from "@emotion/react";

const typoCreator = (fontFamily: string, fontSize: string, fontWeight: number, lineHeight: string) => {
  return css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};

export const Theme = {
  colors: {
    Label_Strong: "#000000",
    Label_Default: "#1A1A1A",
    Label_Alternative: "#454D55",
    Label_Assitive: "#737F8C",
    Label_Disable: "#C7CCD1",
    Label_Inverse: "#FFFFFF",
    Label_Primary_Strong: "#0956A5",
    Label_Primary_Default: "#1A80E5",
    Bg_Default: "#FFFFFF",
    Bg_Alternative: "#F8FAFB",
    Surface_Primary: "#E8F2FC",
    Surface_Default: "#FFFFFF",
    Surface_Alternative: "#F8FAFB",
    Surface_Divider: "#0319300C",
    Fill_White: "#FFFFFF",
    Fill_Lightest: "#F8FAFB",
    Fill_Light: "#EEF2F6",
    Fill_Default: "#E1E6EB",
    Fill_Dark: "#ABB3BB",
    Fill_Disable: "#EFEFF0",
    Fill_Primary_Lightest: "#E8F2FC",
    Fill_Primary_Lighter: "#D1E5FA",
    Fill_Primary_Light: "#4899EA",
    Fill_Primary_Default: "#1A80E5",
    Fill_Primary_Dark: "#0B6BCB",
    Border_Strong: "#70737C99",
    Border_Default: "#70737C14",
    Border_Primary_Default: "#76B2EF80",
    Border_Primary_Strong: "#1A80E5",
    Status_Success: "#0AC277",
    Status_Cautionary: "#FFAA00",
    Status_Negative: "#FF4262",
    Dim_Default: "#2E333880",
    Dim_Primary: "#1A80E580",
    Dim_Primary_Gradient: "linear-gradient(180deg, rgba(3, 25, 48, 0) 22.46%, rgba(3, 25, 48, 0.6) 93.84%)",
    Surface_Gradient_Dim: "linear-gradient(180deg, #03193000 0%, #03193099 100%)",
    Surface_Primary_Gradient_Dim: "linear-gradient(180deg, #2E333880 0%, ##2E333800 100%)"
  },
  typo: {
    Display_S: typoCreator("Pretendard-SemiBold", "36px", 600, "44px"),
    Display_M: typoCreator("Pretendard-SemiBold", "48px", 600, "56px"),
    Display_L: typoCreator("Pretendard-SemiBold", "56px", 600, "64px"),
    Headline_L: typoCreator("Pretendard-Bold", "28px", 700, "38px"),
    Headline_M: typoCreator("Pretendard-Bold", "26px", 700, "34px"),
    Headline_S: typoCreator("Pretendard-Bold", "24px", 700, "32px"),
    Title_L: typoCreator("Pretendard-Bold", "22px", 600, "34px"),
    Title_M: typoCreator("Pretendard-Bold", "20px", 600, "30px"),
    Title_S: typoCreator("Pretendard-Bold", "18px", 600, "26px"),
    Title_XS: typoCreator("Pretendard-Bold", "16px", 600, "24px"),
    Body_XL: typoCreator("Pretendard-Regular", "18px", 400, "28px"),
    Body_L: typoCreator("Pretendard-Regular", "16px", 400, "24px"),
    Body_M: typoCreator("Pretendard-Regular", "14px", 400, "22px"),
    Body_S: typoCreator("Pretendard-Medium", "12px", 400, "18px"),
    Label_L: typoCreator("Pretendard-SemiBold", "14px", 600, "18px"),
    Label_M: typoCreator("Pretendard-SemiBold", "12px", 600, "16px"),
    Label_S: typoCreator("Pretendard-SemiBold", "10px", 600, "14px")
  },
  shadow: {
    Neutral_Basic_L: "0px 0px 32px rgba(59, 62, 67, 0.08)",
    Shadow_Md: "0px 0px 8px rgba(0, 0, 0, 0.04)"
  },
  size: {
    Header_Height: "56px",
    BottomNavBar_Height: "56px"
  }
};

export type TColor = keyof (typeof Theme)["colors"];
export type TTypo = keyof (typeof Theme)["typo"];
