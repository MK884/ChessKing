import { IconType } from "react-icons";

export interface customeButtonProps {
    text: string;
    icon?: IconType;
    padding?: string;
    fontSize?: string;
    bgColor?: string;
    textColor?: string;
    borderRadius?: string;
    hoverBgColor?: string;
    iconToLeft?: boolean;
    styles?: string;
    onClick?: () => void;
  }

