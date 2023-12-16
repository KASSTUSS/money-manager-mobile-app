import { ReactNode } from "react";

export type ServiceButtonProps = {
  title: string;
  icon: string;
  color?: string;
  onPress: () => void;
  fill?: boolean;
};
