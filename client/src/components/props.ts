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
    iconStyle?: string;
    styles?: string;
    onClick?: () => void;
  }


export interface CardProps {
  title: string;
  icon?: IconType;
  description?: string;
  styles?: string;
  onClick?: () => void;
} 

export interface InputProps {
  placeholder: string;
  type: string;
  style?: string;
  onchange?: () => void;
}
