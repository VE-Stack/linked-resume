import { DesignTypes } from "../../../ts/enums";

export const getDesignConditions = (design: DesignTypes): Record<DesignTypes, boolean> => {
  return {
    [DesignTypes.Filled]: design === DesignTypes.Filled,
    [DesignTypes.Outlined]: design === DesignTypes.Outlined,
    [DesignTypes.Text]: design === DesignTypes.Text,
    [DesignTypes.Elevated]: design === DesignTypes.Elevated
  };
};
