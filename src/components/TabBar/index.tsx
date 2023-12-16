import React from 'react';
import { ReactNode } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Path, Rect, Svg } from 'react-native-svg';
import SvgIcon from '../SvgIcon';
import { COLORS } from '../../constants/colors';
import { ICON_NAMES } from '../../constants/iconNames';
import { ROUTES } from '../../constants/routes';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import uuid from 'react-uuid';

function getIcon(route: string, isFocused: boolean): ReactNode {
    switch (route) {
        case ROUTES.ACCOUNTS:
            return <SvgIcon iconName={ICON_NAMES.ACCOUNTS_TAB} color={isFocused ? COLORS.MAIN : COLORS.UNSELECTED} size={32} />
        case ROUTES.TRANSACTIONS:
            return <SvgIcon iconName={ICON_NAMES.TRANSACTIONS_TAB} color={isFocused ? COLORS.MAIN : COLORS.UNSELECTED} size={32} />
        case ROUTES.SERVICES:
            return <SvgIcon iconName={ICON_NAMES.SERVICES_TAB} color={isFocused ? COLORS.MAIN : COLORS.UNSELECTED} size={32} />
        case ROUTES.SETTINGS:
            return <SvgIcon iconName={ICON_NAMES.SETTINGS_TAB} color={isFocused ? COLORS.MAIN : COLORS.UNSELECTED} size={32} />
    }
}

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {

    const { width } = useWindowDimensions();

    return (
        <View style={{ position: 'relative' }}>
            <View style={{
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 7,
                zIndex: 1,
            }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <>
                            {(index === 2) && (
                                <>
                                    <TouchableOpacity
                                        onPress={() => { navigation.navigate(ROUTES.ADD_TRANSACTION) }}
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: COLORS.MAIN,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 70,
                                            height: 70,
                                            transform: [{ translateX: -35 }],
                                            borderRadius: 35,
                                            left: width / 2,
                                            bottom: 25,
                                        }}
                                        key={uuid()}
                                    >
                                        <SvgIcon iconName={ICON_NAMES.PLUS} color='#fff' size={32} />
                                    </TouchableOpacity>
                                    <View
                                        key={uuid()}
                                        style={{
                                            width: 120,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingTop: 40,
                                        }} >

                                    </View>
                                </>
                            )
                            }
                            <TouchableOpacity
                                key={uuid()}
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{
                                    position: 'relative',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    width: 65,
                                }}
                            >
                                {getIcon(route.name, isFocused)}
                                <Text style={{
                                    color: isFocused ? COLORS.MAIN : COLORS.UNSELECTED,
                                    fontSize: 7.5,
                                    textTransform: 'uppercase',
                                    fontFamily: isFocused ? 'Rubik800' : 'Rubik600',
                                    letterSpacing: -0.18,
                                }}>
                                    {label.toString()}
                                </Text>
                            </TouchableOpacity>
                        </>
                    );
                })}
            </View>
            <Svg style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                zIndex: 0,

            }} width={width} height={width / 360 * 58} viewBox="0 0 360 58" fill="none">
                <Path fill="#ffffff" d="
                        M 0.00 0.00
                        L 103.49 0.00
                        Q 122.63 1.75 136.42 14.49
                        Q 138.42 16.33 140.15 18.43
                        C 143.15 22.07 145.96 25.68 149.38 28.94
                        C 167.47 46.11 197.08 44.87 213.75 25.76
                        C 217.32 21.67 220.53 17.13 224.62 13.53
                        Q 238.14 1.61 256.63 0.00
                        L 360.00 0.00
                        L 360.00 58.00
                        L 0.00 58.00
                        L 0.00 0.00
                        Z"
                />
            </Svg>
        </View>
    );
}
