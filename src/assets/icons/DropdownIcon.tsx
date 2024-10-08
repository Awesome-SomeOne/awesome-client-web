import { Theme } from "../../styles/theme";

const DropdownIcon = ({
  size = "20",
  color = Theme.colors.Label_Assitive,
  open = false
}: {
  size?: string;
  color?: string;
  open?: boolean;
}) => {
  return open ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.1168 8.36644L5.36644 14.1168C4.87785 14.6054 4.87785 15.3946 5.36644 15.8832C5.85503 16.3718 6.64429 16.3718 7.13289 15.8832L12.0063 11.0224L16.8671 15.8832C17.3557 16.3718 18.145 16.3718 18.6336 15.8832C19.1221 15.3946 19.1221 14.6054 18.6336 14.1168L12.8832 8.36644C12.4072 7.87785 11.6054 7.87785 11.1168 8.36644Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.8546 8.36644L11.9937 13.2273L7.13289 8.36644C6.6443 7.87785 5.85503 7.87785 5.36644 8.36644C4.87785 8.85503 4.87785 9.6443 5.36644 10.1329L11.1168 15.8832C11.6054 16.3718 12.3946 16.3718 12.8832 15.8832L18.6336 10.1329C19.1221 9.6443 19.1221 8.85503 18.6336 8.36644C18.145 7.89038 17.3432 7.87785 16.8546 8.36644Z"
        fill={color}
      />
    </svg>
  );
};

export default DropdownIcon;
