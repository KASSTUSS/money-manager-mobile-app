import { ReactNode } from 'react';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '../../constants/routes';
import TransactionsScreen from '../../screens/TransactionsScreen';
import SvgIcon from '../../components/SvgIcon';
import { ICON_NAMES } from '../../constants/iconNames';
import SettingsScreen from '../../screens/SettingsScreen';
import HeaderScreen from '../../components/Header';
import TabBar from '../../components/TabBar';
import StatisticsScreen from '../../screens/StatisticsScreen';
import AccountsScreen from '../../screens/AccountsScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs(): ReactNode {
    return (
        <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
            initialRouteName={ROUTES.ACCOUNTS}
        >
            <Tab.Screen
                name={ROUTES.ACCOUNTS}
                component={AccountsScreen}
                options={{
                    header: () => <HeaderScreen title='Счета' />,
                    title: 'Счета',
                    tabBarIcon: ({ focused, size, color }) => <SvgIcon iconName={ICON_NAMES.ACCOUNTS_TAB} fill={focused} size={size} color={color} />
                }}
            />
            <Tab.Screen
                name={ROUTES.TRANSACTIONS}
                component={TransactionsScreen}
                options={{
                    header: () => <HeaderScreen title='Записи' buttons={[]} />,
                    title: 'Записи',
                    tabBarIcon: ({ focused, size, color }) => <SvgIcon iconName={ICON_NAMES.TRANSACTIONS_TAB} fill={focused} size={size} color={color} />
                }}
            />
            <Tab.Screen
                name={ROUTES.SERVICES}
                component={StatisticsScreen}
                options={{
                    header: () => <HeaderScreen title='Статистика и аналитика' />,
                    title: 'Статистика',
                    tabBarIcon: ({ focused, size, color }) => <SvgIcon iconName={ICON_NAMES.PLUS} size={size} color={color} />
                }}
            />
            <Tab.Screen
                name={ROUTES.SETTINGS}
                component={SettingsScreen}
                options={{
                    header: () => <HeaderScreen title='Настройки' />,
                    title: 'Еще',
                    tabBarIcon: ({ focused, size, color }) => <SvgIcon iconName={ICON_NAMES.TRANSACTIONS_TAB} fill={focused} size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}

