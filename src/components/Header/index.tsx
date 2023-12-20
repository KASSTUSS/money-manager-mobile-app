import { ReactNode } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import SvgIcon from '../SvgIcon';
import { ICON_NAMES } from '../../constants/iconNames';
import { COLORS } from '../../constants/colors';
import { HeaderScreenProps } from './types';
import uuid from 'react-uuid';
import { useNavigation } from '@react-navigation/native';

export default function HeaderScreen({ title, innerComponent, buttons, backButton }: HeaderScreenProps): ReactNode {

    const navigation = useNavigation();

    return (
        <View style={{
            width: '100%',
            height: 93.75,
            paddingLeft: 15,
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
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 20,
                }}>
                    {backButton && (
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }}>
                            <SvgIcon iconName={ICON_NAMES.GO_BACK} color={COLORS.MAIN_TEXT} size={22} />
                        </TouchableOpacity>
                    )}
                    <Text style={{
                        color: COLORS.MAIN_TEXT,
                        fontSize: 20,
                        fontFamily: 'Rubik500',
                    }}>{title}</Text>
                </View>
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