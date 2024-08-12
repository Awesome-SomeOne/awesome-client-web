/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import PretendardBold from "../assets/fonts/Pretendard-Bold.ttf";
import PretendardSemiBold from "../assets/fonts/Pretendard-SemiBold.ttf";
import PretendardMedium from "../assets/fonts/Pretendard-Medium.ttf";
import PretendardRegular from "../assets/fonts/Pretendard-Regular.ttf";

export const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video,
      #root {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
      }

      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      html,
      body,
      #root {
        width: 100%;
        height: 100%;
        text-align: initial;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      ul,
      li {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;
      }
      @font-face {
        font-family: Pretendard-Bold;
        src: url(${PretendardBold});
      }
      @font-face {
        font-family: Pretendard-SemiBold;
        src: url(${PretendardSemiBold});
      }
      @font-face {
        font-family: Pretendard-Medium;
        src: url(${PretendardMedium});
      }
      @font-face {
        font-family: Pretendard-Regular;
        src: url(${PretendardRegular});
      }
    `}
  />
);
