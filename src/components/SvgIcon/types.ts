export type IconNamesType =
  | "plus"
  | "search"
  | "accounts-tab"
  | "transactions-tab"
  | "services-tab"
  | "settings-tab"
  | "statistics-app"
  | "budget-app"
  | "planned-transactions-app"
  | "depts-app"
  | "money-box-app"
  | "bonus-cards-app"
  | "shopping-lists-app"
  | "currency-rates-app";

export type SvgIconProps = {
  iconName: IconNamesType | string;
  size: number;
  color: string;
  fill?: boolean
};