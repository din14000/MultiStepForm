export type detailsDataType = {
    detailsData: Array<{
      detailsSubStep: number;
      selectionOptions: Array<{
        name: string;
        label: string;
        value: Array<string>;
      }>;
    }>;
  };
  