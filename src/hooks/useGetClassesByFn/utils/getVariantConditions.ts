import { VariantTypes } from "../../../ts/enums";

export const getVariantConditions = (variant: VariantTypes): Record<VariantTypes, boolean> => {
  return {
    [VariantTypes.Primary]: variant === VariantTypes.Primary,
    [VariantTypes.Secondary]: variant === VariantTypes.Secondary,
    [VariantTypes.Success]: variant === VariantTypes.Success,
    [VariantTypes.Danger]: variant === VariantTypes.Danger,
    [VariantTypes.Warning]: variant === VariantTypes.Warning,
    [VariantTypes.Info]: variant === VariantTypes.Info,
    [VariantTypes.Light]: variant === VariantTypes.Light,
    [VariantTypes.Dark]: variant === VariantTypes.Dark
  };
};
