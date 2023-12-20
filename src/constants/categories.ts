import { ReactNode } from "react";
import { ICON_NAMES } from "./iconNames";
import { COLORS, COLORS_SERVICES } from "./colors";

export type CategoryType = {
    id: number;
    name: string;
    transactionType: string,
    icon: ReactNode;
    color: string;
}

export const categories: CategoryType[] = [
  {
    id: 1,
    name: "Продукты",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 2,
    name: "Кафе, ресторан",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 3,
    name: "Одежда",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 4,
    name: "Подарки",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 5,
    name: "Красота и здоровье",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 6,
    name: "Аптека",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 7,
    name: "Коммунальные услуги",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 8,
    name: "Такси",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 9,
    name: "Общественный транспорт",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 10,
    name: "Топливо",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 11,
    name: "Кино",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 12,
    name: "Образование",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 13,
    name: "Стипендия",
    transactionType: "+",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 14,
    name: "Дополнительные доходы",
    transactionType: "+",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 15,
    name: "Подарки",
    transactionType: "+",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
  {
    id: 16,
    name: "Зарплата",
    transactionType: "+",
    icon: ICON_NAMES.CATEGORY_FOOD,
    color: COLORS_SERVICES.CURRENCY_RATES,
  },
];