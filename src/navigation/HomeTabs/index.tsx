import { ReactNode } from 'react';
import React from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../../screens/AccountsScreen';
import { ROUTES } from '../../constants/routes';
import TransactionsScreen from '../../screens/TransactionsScreen';
import SvgIcon from '../../components/SvgIcon';
import { ICON_NAMES } from '../../constants/iconNames';
import MyTabBar from '../../components/TabBar';
import ServicesScreen from '../../screens/ServicesScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import HeaderScreen from '../../components/Header';
import { COLORS } from '../../constants/colors';

const Tab = createBottomTabNavigator();

export default function HomeTabs(): ReactNode {
    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
            initialRouteName={ROUTES.ACCOUNTS}
        >
            <Tab.Screen
                name={ROUTES.ACCOUNTS}
                component={AccountScreen}
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
                    header: () => <HeaderScreen title='Записи' buttons={[
                        <TouchableOpacity>
                            <SvgIcon iconName={ICON_NAMES.SEARCH} color={COLORS.MAIN} size={25} />
                        </TouchableOpacity>,
                        <TouchableOpacity>
                            <SvgIcon iconName={ICON_NAMES.PLUS} color={COLORS.MAIN} size={25} />
                        </TouchableOpacity>
                    ]} />,
                    title: 'Записи',
                    tabBarIcon: ({ focused, size, color }) => <SvgIcon iconName={ICON_NAMES.TRANSACTIONS_TAB} fill={focused} size={size} color={color} />
                }}
            />
            <Tab.Screen
                name={ROUTES.SERVICES}
                component={ServicesScreen}
                options={{
                    header: () => <HeaderScreen title='Инструменты' />,
                    title: 'Инструменты',
                    tabBarIcon: ({ focused, size, color }) => <SvgIcon iconName={ICON_NAMES.TRANSACTIONS_TAB} fill={focused} size={size} color={color} />
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

