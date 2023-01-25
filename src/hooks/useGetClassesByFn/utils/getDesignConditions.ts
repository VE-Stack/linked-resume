import { DesignVariants } from "../../../ts/enums";

export const getDesignConditions = (design: DesignVariants): Record<DesignVariants, boolean> => {
  return {
    [DesignVariants.Filled]: design === DesignVariants.Filled,
    [DesignVariants.Outlined]: design === DesignVariants.Outlined,
    [DesignVariants.Text]: design === DesignVariants.Text,
    [DesignVariants.Elevated]: design === DesignVariants.Elevated
  };
};
