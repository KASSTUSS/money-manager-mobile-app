import { ReactNode } from "react";

export type HeaderScreenProps = {
    title: string;
    innerComponent?: ReactNode;
    buttons?: ReactNode[];
    backButton?: boolean;
}