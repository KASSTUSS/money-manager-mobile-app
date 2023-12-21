import { ReactNode } from "react";

export type TransactionBlockProps = {
  value: number;
  currency: string;
  date: Date;
  category: string;
  categoryColorIndex: string;
  icon: string;
  accountTitle: string;
  accountGradient: string[];
  onPress: () => void;
};