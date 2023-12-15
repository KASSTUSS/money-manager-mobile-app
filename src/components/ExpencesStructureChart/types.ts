import { ReactNode, JSX } from "react";

export type ExpenceDataChart = {
  name: string;
  sum: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
};

export type ExpencesStructureChartProps = {
  expencesStructureData: ExpenceDataChart[];
};
