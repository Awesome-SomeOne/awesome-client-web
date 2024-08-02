import * as React from "react";
import { ReactNode } from "react";
import PersonIcon from "../../../assets/icons/PersonIcon";
import { Theme } from "../../../styles/theme";
import * as S from "./styles";

interface IIconLabelProps {
  icon?: ReactNode;
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
