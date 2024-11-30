import type * as Icons from "react-feather";

export type IconProps = {
  name: keyof typeof Icons;
} & Icons.IconProps;
