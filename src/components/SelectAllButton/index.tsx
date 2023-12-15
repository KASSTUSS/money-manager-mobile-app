import { ReactNode } from "react";
import { TouchableOpacity, Text } from 'react-native';
import { styles } from "./styles";
import { SelectAllButtonProps } from "./types";


export default function SelectAllButton({ onPress }: SelectAllButtonProps): ReactNode {

    return (
        <TouchableOpacity onPress={onPress} style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Выбрать все</Text>
        </TouchableOpacity>
    )
}