import { DesignTypes, VariantTypes } from "../../ts/enums";
import classNames from "classnames";

import { specificVariants, VariantNDesign } from "../../ts/types";
import { ReturnFn1, ReturnFn2 } from "./types/returnFn";
import { getVariantConditions, getDesignConditions } from "./utils";

export const useGetClassesByFn = (
  ...initialClasses: Parameters<typeof classNames>
): ReturnFn1 | ReturnFn2 => {
  return (variant?: VariantNDesign | VariantTypes, design?: DesignTypes) => {
    const [foundVariant, foundDesign] = [
      (typeof variant === "object" ? variant.variant : variant) || VariantTypes.Primary,
      (typeof variant === "object" ? variant.design : design) || DesignTypes.Filled
    ];

    const variantConditions = getVariantConditions(foundVariant);
    const designConditions = getDesignConditions(foundDesign);

    return classNames(
      ...initialClasses,
      specificVariants.reduce(
        (acc, variant) => ({
          ...acc,
          [`border-${variant}`]: variantConditions[variant],
          [`bg-${variant}`]: variantConditions[variant] && designConditions.filled,
          [`text-${variant}`]: variantConditions[variant] && designConditions.text,
          [`shadow-${variant}`]: variantConditions[variant] && designConditions.elevated
        }),
        {
          shadow: designConditions.elevated,
          border:
            designConditions.outlined ||
            (designConditions.filled && !variantConditions.dark && !variantConditions.light)
        } as Record<string, boolean>
      ),
      variantConditions.light && {
        "hidden": true,
        "dark:inline-block": true,
        "shadow": designConditions.elevated,
        "shadow-light": designConditions.elevated,
        "bg-light": designConditions.filled,
        "text-dark": designConditions.filled,
        "text-light": designConditions.text
      },
      variantConditions.dark && {
        "dark:hidden": true,
        "shadow": designConditions.elevated,
        "shadow-dark": designConditions.elevated,
        "bg-dark": designConditions.filled,
        "text-light": designConditions.filled,
        "text-dark": designConditions.text
      }
    );
  };
};
