import { ReactNode } from "react";

export type TransactionsGroupContainerProps = {
  sum: number;
  currency: string;
  date: Date;
  children: string | JSX.Element | JSX.Element[] | ReactNode | ReactNode[];
};