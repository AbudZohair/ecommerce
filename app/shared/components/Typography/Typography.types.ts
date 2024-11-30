export type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "label" | "tiny";
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};
