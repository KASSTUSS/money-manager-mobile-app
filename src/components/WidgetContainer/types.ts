import { ReactNode, JSX } from "react";

export type widgetContainerProps = {
  children: string | JSX.Element | JSX.Element[] | ReactNode | ReactNode[],
  title: string;
};
