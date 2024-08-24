import * as React from "react";
import { ReactElement } from "react";

import * as S from "./styles";
import PersonIcon from "@/assets/icons/PersonIcon";
import { Theme } from "@/styles/theme";

interface IIconLabelProps {
  icon?: ReactElement<{ color?: string }>;
  iconColor?: string;
  labelColor?: string;
  selected?: boolean;
}

const IconLabel = ({
  icon = <PersonIcon />,
  iconColor = Theme.colors.Label_Inverse,
  labelColor = Theme.colors.Label_Assitive,
  selected = false
}: IIconLabelProps) => {
  const coloredIcon = icon && React.isValidElement(icon) ? React.cloneElement(icon, { color: iconColor }) : icon;

  return (
    <S.LabelContainer labelColor={labelColor} selected={selected}>
      {coloredIcon}
    </S.LabelContainer>
  );
};

export default IconLabel;
