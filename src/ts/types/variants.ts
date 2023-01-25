import { VariantTypes } from "../enums";

export const specificVariants: VariantTypes[] = [
  VariantTypes.Primary,
  VariantTypes.Secondary,
  VariantTypes.Success,
  VariantTypes.Danger,
  VariantTypes.Warning,
  VariantTypes.Info
];

export const variants: VariantTypes[] = specificVariants.concat([
  VariantTypes.Light,
  VariantTypes.Dark
]);
