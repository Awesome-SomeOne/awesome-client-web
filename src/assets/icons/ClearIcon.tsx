import { Theme } from "../../styles/theme";

const ClearIcon = ({ size = "16", color = Theme.colors.Label_Default }: { size?: string; color?: string }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.621 2.85025C3.86761 2.60459 4.26667 2.60535 4.51233 2.85196L8.75088 7.10679L12.9894 2.85196C13.2351 2.60535 13.6342 2.60459 13.8808 2.85025C14.1274 3.09591 14.1281 3.49498 13.8825 3.74158L9.64051 7.99984L13.8825 12.2581C14.1281 12.5047 14.1274 12.9038 13.8808 13.1494C13.6342 13.3951 13.2351 13.3943 12.9894 13.1477L8.75088 8.89288L4.51233 13.1477C4.26667 13.3943 3.86761 13.3951 3.621 13.1494C3.3744 12.9038 3.37363 12.5047 3.61929 12.2581L7.86126 7.99984L3.61929 3.74158C3.37363 3.49498 3.3744 3.09591 3.621 2.85025Z"
        fill={color}
      />
    </svg>
  );
};

export default ClearIcon;
