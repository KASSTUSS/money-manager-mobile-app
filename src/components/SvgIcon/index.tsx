import { ReactNode } from 'react';
import { SvgIconProps } from "./types";
import { ICON_NAMES } from '../../constants/iconNames';
import { AccountsIconFilled, AccountsIconOutlined, CarrencyRatesServiceIcon, CategoryFoodIcon, CategoryOtherIncomeIcon, MoneyBoxServiceIcon, PlusIcon, SearchIcon, ServicesIconFilled, ServicesIconOutlined, SettingsIconFilled, SettingsIconOutlined, StatisticsServiceIcon, TransactionsIconFilled, TransactionsIconOutlined } from './icons';

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
    }
}