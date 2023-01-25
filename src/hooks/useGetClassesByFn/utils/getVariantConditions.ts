import { TypeVariants } from "../../../ts/enums";

export const getVariantConditions = (variant: TypeVariants): Record<TypeVariants, boolean> => {
  return {
    [TypeVariants.Primary]: variant === TypeVariants.Primary,
    [TypeVariants.Secondary]: variant === TypeVariants.Secondary,
    [TypeVariants.Success]: variant === TypeVariants.Success,
    [TypeVariants.Danger]: variant === TypeVariants.Danger,
    [TypeVariants.Warning]: variant === TypeVariants.Warning,
    [TypeVariants.Info]: variant === TypeVariants.Info,
    [TypeVariants.Light]: variant === TypeVariants.Light,
    [TypeVariants.Dark]: variant === TypeVariants.Dark
  };
};
