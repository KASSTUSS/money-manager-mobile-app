import { ReactNode } from "react";
import { ServiceButtonProps } from "./types";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { COLORS } from "../../constants/colors";
import SvgIcon from "../SvgIcon";


export default function ServiceButton({ title, icon, color, onPress, fill }: ServiceButtonProps): ReactNode {

    return (
        <TouchableOpacity onPress={onPress} style={styles.serviceButtonContainer}>
            <View style={[
                styles.serviceIconContainer,
                {
                    backgroundColor: fill ? COLORS.MAIN : COLORS.SERVICE_BG,
                }
            ]}>
                <SvgIcon iconName={icon} color={fill ? "#fff" : color ? color : ''} size={55} />
            </View>
            <Text style={styles.serviceTitle}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}