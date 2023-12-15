import { ReactNode } from "react";

export type AccountBlockProps = {
  title: string;
  value: string;
  colorsGradient: string[];
  onPress: () => void;
  onLongPress: () => void;
  focused: boolean;
};
