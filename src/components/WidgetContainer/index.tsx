import { ReactNode } from "react";
import { View, Text } from 'react-native';
import { styles } from "./styles";
import { widgetContainerProps } from "./types";


export default function WidgetContainer({ children, title}: widgetContainerProps): ReactNode {

    return (
        <View style={styles.widgetContainer}>
            <View style={styles.widgetTitleContainer}>
                <Text style={styles.widgetTitle}>{title}</Text>
            </View>
            <View style={styles.widgetContent}>
                {children}
            </View>
            
        </View>
    )
}