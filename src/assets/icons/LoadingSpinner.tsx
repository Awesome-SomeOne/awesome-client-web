import styled from "@emotion/styled";

const LoadingSpinner = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  return (
    <AnimationWrapper
      width={size === "sm" ? "16px" : "24px"}
      height={size === "sm" ? "16px" : "24px"}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.80664 2.28571C5.65073 2.28571 3.09236 4.84409 3.09236 8C3.09236 11.1559 5.65073 13.7143 8.80664 13.7143C11.9626 13.7143 14.5209 11.1559 14.5209 8C14.5209 7.36882 15.0326 6.85714 15.6638 6.85714C16.295 6.85714 16.8066 7.36882 16.8066 8C16.8066 12.4183 13.2249 16 8.80664 16C4.38836 16 0.806641 12.4183 0.806641 8C0.806641 3.58172 4.38836 0 8.80664 0C9.43782 0 9.9495 0.511675 9.9495 1.14286C9.9495 1.77404 9.43782 2.28571 8.80664 2.28571Z"
        fill="white"
      />
    </AnimationWrapper>
  );
};

const AnimationWrapper = styled.svg`
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;
