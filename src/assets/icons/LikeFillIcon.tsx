import { Theme } from "@/styles/theme";

const LikeFillIcon = ({
  size = "24",
  color = Theme.colors.Fill_Primary_Default
}: {
  size?: string;
  color?: string;
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.4905 20.9895C11.9367 20.9895 11.3829 20.8211 10.9111 20.4737C2.55277 14.3789 2.48098 9.55789 2.50149 9.02105V8.77895C2.50149 5.58947 4.96285 3 7.97801 3C9.98811 3 11.5675 4.32632 12.5007 5.88421C13.434 4.32632 15.0236 3 17.0235 3C20.0386 3 22.5 5.58947 22.5 8.77895C22.5 8.93684 22.5 9.08421 22.4795 9.24211C22.4795 10.0737 22.0898 14.6316 14.0596 20.4842C13.5878 20.8316 13.034 21 12.4802 21L12.4905 20.9895Z"
        fill={color}
      />
    </svg>
  );
};

export default LikeFillIcon;
