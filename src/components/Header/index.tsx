import { ReactNode } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import SvgIcon from '../SvgIcon';
import { ICON_NAMES } from '../../constants/iconNames';
import { COLORS } from '../../constants/colors';
import { HeaderScreenProps } from './types';
import uuid from 'react-uuid';

export default function HeaderScreen({ title, innerComponent, buttons }: HeaderScreenProps): ReactNode {

    return (
        <View style={{
            width: '100%',
            height: 93.75,
            paddingLeft: 25,
            paddingRight: 25,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            backgroundColor: '#fff',
        }}>
            <View style={{
                height: 53.75,
                width: "100%",
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    color: COLORS.MAIN_TEXT,
                    fontSize: 20,
                    fontFamily: 'Rubik500',
                }}>{title}</Text>
                <View>
                    {!!innerComponent && innerComponent}
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 20
                }}>
                    {buttons?.map(button => (
                        <View key={uuid()}>
                            {button}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}