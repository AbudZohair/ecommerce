import type { TypographyProps } from "./Typography.types";

const Typography = ({
  variant,
  as: Component = "p",
  children,
  className = "",
}: TypographyProps) => {
  return (
    <Component className={`${variant} ${className}`}>{children}</Component>
  );
};

export default Typography;
