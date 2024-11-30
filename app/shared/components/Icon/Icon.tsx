import * as Icons from "react-feather";
import { IconProps } from "./Icon.types";

const Icon = ({ name, size = 24, color, ...props }: IconProps) => {
  const FeatherIcon = Icons[name];

  if (!FeatherIcon) {
    console.error(`Icon "${name}" does not exist in Feather icons.`);
    return null;
  }

  return <FeatherIcon size={size} color={color} {...props} />;
};

export default Icon;
