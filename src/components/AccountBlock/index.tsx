import { ReactNode, useState, useEffect } from "react";
import { AccountBlockProps } from "./types";
import { Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { COLORS } from "../../constants/colors";


export default function AccountBlock({ title, value, colorsGradient, focused, onPress, onLongPress }: AccountBlockProps): ReactNode {

    const [isFocused, setIsFocused] = useState(focused)

    useEffect(() => {
        setIsFocused(focused);
    }, [focused]);

    return (
        <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.accountBlock}>
            <LinearGradient
                colors={colorsGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.gradientContainer}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.value}>{parseFloat(value).toFixed(2)} BYN</Text>
            </LinearGradient>
        </Pressable>
    )
}