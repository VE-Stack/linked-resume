import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import { useGetClassesByFn } from "../../hooks/useGetClassesByFn";
import { VariantNDesign } from "../../ts/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantNDesign {}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant,
  design,
  children,
  ...btnProps
}) => {
  const getClasses = useGetClassesByFn("px-6", "py-2.5", "rounded-full");

  return (
    <button
      data-design={design}
      data-variant={variant}
      className={getClasses(variant, design)}
      {...btnProps}
    >
      {children}
    </button>
  );
};
