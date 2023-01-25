import { DesignTypes, VariantTypes } from "../../../ts/enums";

import { VariantNDesign } from "../../../ts/types";

export type ReturnFn1 = (variantNType?: VariantNDesign) => string;
export type ReturnFn2 = (variant?: VariantTypes, design?: DesignTypes) => string;
