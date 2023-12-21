import { ReactNode } from "react";
import { ICON_NAMES } from "./iconNames";
import { COLORS, COLORS_SERVICES, categoriesColors } from "./colors";

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
    color: categoriesColors[1],
  },
  {
    id: 2,
    name: "Кафе, ресторан",
    transactionType: "-",
    icon: ICON_NAMES.PLUS,
    color: categoriesColors[2],
  },
  {
    id: 3,
    name: "Одежда",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_CLOTHES,
    color: categoriesColors[3],
  },
  {
    id: 4,
    name: "Подарки",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_GIFT,
    color: categoriesColors[4],
  },
  {
    id: 5,
    name: "Красота и здоровье",
    transactionType: "-",
    icon: ICON_NAMES.PLUS,
    color: categoriesColors[5],
  },
  {
    id: 6,
    name: "Аптека",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_DRUGSTORE,
    color: categoriesColors[6],
  },
  {
    id: 7,
    name: "Коммунальные услуги",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_HOUSE_SERVICES,
    color: categoriesColors[7],
  },
  {
    id: 8,
    name: "Такси",
    transactionType: "-",
    icon: ICON_NAMES.PLUS,
    color: categoriesColors[8],
  },
  {
    id: 9,
    name: "Общественный транспорт",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_BUS,
    color: categoriesColors[9],
  },
  {
    id: 10,
    name: "Топливо",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_FUEL,
    color: categoriesColors[10],
  },
  {
    id: 11,
    name: "Кино",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_CINEMA,
    color: categoriesColors[11],
  },
  {
    id: 12,
    name: "Образование",
    transactionType: "-",
    icon: ICON_NAMES.CATEGORY_STUDY,
    color: categoriesColors[19],
  },
  {
    id: 13,
    name: "Стипендия",
    transactionType: "+",
    icon: ICON_NAMES.CATEGORY_STUDY_INCOME,
    color: categoriesColors[18],
  },
  {
    id: 14,
    name: "Дополнительные доходы",
    transactionType: "+",
    icon: ICON_NAMES.CATEGORY_OTHER_INCOME,
    color: categoriesColors[14],
  },
  {
    id: 15,
    name: "Подарки",
    transactionType: "+",
    icon: ICON_NAMES.CATEGORY_GIFT,
    color: categoriesColors[15],
  },
  {
    id: 16,
    name: "Зарплата",
    transactionType: "+",
    icon: ICON_NAMES.CATEGORY_SALARY,
    color: categoriesColors[16],
  },
];