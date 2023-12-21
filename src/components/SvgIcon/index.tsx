import { ReactNode } from 'react';
import { SvgIconProps } from "./types";
import { ICON_NAMES } from '../../constants/iconNames';
import { AccountsIconFilled, AccountsIconOutlined, CarrencyRatesServiceIcon, CategoryBus, CategoryCinema, CategoryClothes, CategoryDrugstore, CategoryFoodIcon, CategoryFuel, CategoryGift, CategoryHouseServices, CategoryOtherIncomeIcon, CategorySalary, CategoryStudy, CategoryStudyIncome, CheckIcon, GoBackIcon, MoneyBoxServiceIcon, PlusIcon, SearchIcon, ServicesIconFilled, ServicesIconOutlined, SettingsIconFilled, SettingsIconOutlined, StatisticsServiceIcon, TransactionsIconFilled, TransactionsIconOutlined } from './icons';

export default function SvgIcon({ iconName, size, color, fill }: SvgIconProps): ReactNode {

    switch (iconName) {
        case ICON_NAMES.ACCOUNTS_TAB:
            if (fill) {
                return <AccountsIconFilled color={color} size={size} />;
            }

            return <AccountsIconOutlined color={color} size={size} />;

        case ICON_NAMES.TRANSACTIONS_TAB:
            if (fill) {
                return <TransactionsIconFilled color={color} size={size} />;
            }

            return <TransactionsIconOutlined color={color} size={size} />;

        case ICON_NAMES.SERVICES_TAB:
            if (fill) {
                return <ServicesIconFilled color={color} size={size} />;
            }

            return <ServicesIconOutlined color={color} size={size} />;

        case ICON_NAMES.SETTINGS_TAB:
            if (fill) {
                return <SettingsIconFilled color={color} size={size} />;
            }

            return <SettingsIconOutlined color={color} size={size} />;

        case ICON_NAMES.PLUS:
            return <PlusIcon color={color} size={size} />;

        case ICON_NAMES.SEARCH:
            return <SearchIcon color={color} size={size} />;
        

        case ICON_NAMES.CATEGORY_FOOD:
            return <CategoryFoodIcon size={size} />;

        case ICON_NAMES.CATEGORY_OTHER_INCOME:
            return <CategoryOtherIncomeIcon size={size} />;

        case ICON_NAMES.STATISTICS_APP:
            return <StatisticsServiceIcon size={size} color={color} />;

        case ICON_NAMES.MONEY_BOX_APP:
            return <MoneyBoxServiceIcon size={size} color={color} />;

        case ICON_NAMES.CURRENCY_RATES_APP:
            return <CarrencyRatesServiceIcon size={size} color={color} />;

        case ICON_NAMES.GO_BACK:
            return <GoBackIcon size={size} color={color} />;

        case ICON_NAMES.CHECK:
            return <CheckIcon size={size} color={color} />;


        case ICON_NAMES.CATEGORY_BUS:
            return <CategoryBus size={size} color={color} />;

        case ICON_NAMES.CATEGORY_DRUGSTORE:
            return <CategoryDrugstore size={size} color={color} />;

        case ICON_NAMES.CATEGORY_CINEMA:
            return <CategoryCinema size={size} color={color} />;

        case ICON_NAMES.CATEGORY_FUEL:
            return <CategoryFuel size={size} color={color} />;

        case ICON_NAMES.CATEGORY_GIFT:
            return <CategoryGift size={size} color={color} />;

        case ICON_NAMES.CATEGORY_STUDY:
            return <CategoryStudy size={size} color={color} />;

        case ICON_NAMES.CATEGORY_HOUSE_SERVICES:
            return <CategoryHouseServices size={size} color={color} />;

        case ICON_NAMES.CATEGORY_CLOTHES:
            return <CategoryClothes size={size} color={color} />;

        case ICON_NAMES.CATEGORY_STUDY_INCOME:
            return <CategoryStudyIncome size={size} color={color} />;

        case ICON_NAMES.CATEGORY_SALARY:
            return <CategorySalary size={size} color={color} />;
    }
}