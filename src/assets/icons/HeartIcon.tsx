import { Theme } from "@/styles/theme";

const HeartIcon = ({ checked }: { checked: boolean }) => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_1337_33549"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="17"
        height="16"
      >
        <path
          d="M8.65349 13.993C8.28429 13.993 7.91508 13.8807 7.60058 13.6491C2.02835 9.58597 1.98049 6.37193 1.99416 6.01404V5.85263C1.99416 3.72632 3.63506 2 5.64517 2C6.98524 2 8.03815 2.88421 8.66033 3.92281C9.2825 2.88421 10.3423 2 11.6755 2C13.6856 2 15.3265 3.72632 15.3265 5.85263C15.3265 5.95789 15.3265 6.05614 15.3128 6.1614C15.3128 6.71579 15.053 9.75439 9.69957 13.6561C9.38506 13.8877 9.01586 14 8.64665 14L8.65349 13.993Z"
          fill="#3B3E43"
        />
      </mask>
      <g mask="url(#mask0_1337_33549)">
        <rect x="0.660156" width="16" height="16" fill={checked ? "white" : Theme.colors.Fill_Primary_Default} />
      </g>
    </svg>
  );
};

export default HeartIcon;
